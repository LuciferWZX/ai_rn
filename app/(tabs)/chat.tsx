import { Button, ListItem, ThemedText, ThemedView } from '@/components'
import { SafeAreaView, Text, View } from 'react-native'
import useChat from '@/hooks/useChat'
import { useEffect } from 'react'
import useChatStore from '@/stores/useChatStore'
import { useShallow } from 'zustand/react/shallow'
import { ResponseCode } from '@/types'
import { FlashList } from '@shopify/flash-list'
import dayjs from 'dayjs'

import { match } from 'ts-pattern'
import { FontAwesomeIcon, LoadingIcon } from '@/components/navigation/TabBarIcon'
const ChatPage = () => {
  const [sessions] = useChatStore(useShallow((state) => [state.sessions]))
  const { getSessions, getSessionsLoading, isError } = useChat({ debounceWait: 300 })
  const fetchSessions = async () => {
    const response = await getSessions({ keywords: '' })
    if (response.code === ResponseCode.success) {
      useChatStore.setState({ sessions: response.data })
    }
    return response
  }
  useEffect(() => {
    fetchSessions().then()
    console.log('首次加载中')
  }, [])
  return (
    <ThemedView className={'h-full'}>
      <SafeAreaView className={'h-full '}>
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
                    fetchSessions().then()
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
      </SafeAreaView>
    </ThemedView>
  )
}
export default ChatPage
