import { Button, ListItem, ThemedText, ThemedView } from '@/components'
import useChat from '@/hooks/useChat'
import { ChatAgentType, ResponseCode } from '@/types'
import useChatStore from '@/stores/useChatStore'
import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { match } from 'ts-pattern'
import { Text, View } from 'react-native'
import { FontAwesomeIcon, LoadingIcon } from '@/components/navigation/TabBarIcon'
import { FlashList } from '@shopify/flash-list'
import dayjs from 'dayjs'

const ChatSearch = () => {
  const [keywords] = useChatStore(useShallow((state) => [state.search]))
  const [sessions, setSessions] = useState<ChatAgentType[]>([])
  const { getSessions, getSessionsLoading, isError } = useChat({ debounceWait: 300 })
  useEffect(() => {
    if (keywords) {
      searchSessions().then()
      return
    }
    setSessions([])
  }, [keywords])
  const searchSessions = async () => {
    const response = await getSessions({ keywords: keywords })
    if (response.code === ResponseCode.success) {
      setSessions(response.data)
    }
    return response
  }
  return (
    <ThemedView className={'flex-1 bg-red-400 h-full '}>
      {match(getSessionsLoading)
        .with(true, () => {
          return (
            <View className={'flex-row items-center gap-2 h-full justify-center'}>
              <LoadingIcon />
              <ThemedText>加载中...</ThemedText>
            </View>
          )
        })
        .otherwise(() => null)}
      {match(isError)
        .with(true, () => {
          return (
            <View className={'h-full items-center justify-center'}>
              <Button
                onPress={() => {
                  searchSessions().then()
                }}
                icon={<FontAwesomeIcon name="refresh" size={18} />}>
                重新加载
              </Button>
            </View>
          )
        })
        .otherwise(() => {
          if (sessions.length === 0) {
            return null
          }
          return (
            <FlashList
              data={sessions}
              keyExtractor={(item) => item.sessionSn}
              renderItem={({ item }) => (
                <ListItem
                  title={item.agentName}
                  desc={<Text>{dayjs(item.updateTime).format('YYYY年MM月DD日 HH:mm:ss')}</Text>}
                />
              )}
              ItemSeparatorComponent={() => <View className={'h-2'} />}
              estimatedItemSize={200}
            />
          )
        })}
    </ThemedView>
  )
}
export default ChatSearch
