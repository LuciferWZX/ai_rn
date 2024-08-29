import { ListItem, ThemedText, ThemedView } from '@/components'
import { SafeAreaView, Text, View } from 'react-native'
import useChat from '@/hooks/useChat'
import { useEffect } from 'react'
import useChatStore from '@/stores/useChatStore'
import { useShallow } from 'zustand/react/shallow'
import { ResponseCode } from '@/types'
import { FlashList } from '@shopify/flash-list'
import dayjs from 'dayjs'
import ChatHeader from '@/app/(tabs)/chat/ChatHeader'

const ChatPage = () => {
  const [sessions] = useChatStore(useShallow((state) => [state.sessions]))
  const { getSessions } = useChat({ debounceWait: 300 })
  useEffect(() => {
    getSessions({ keywords: '' }).then((response) => {
      if (response.code === ResponseCode.success) {
        useChatStore.setState({ sessions: response.data })
      }
    })
  }, [getSessions])
  return (
    <ThemedView className={'h-full'}>
      <SafeAreaView className={'h-full '}>
        <ChatHeader />
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
      </SafeAreaView>
    </ThemedView>
  )
}
export default ChatPage
