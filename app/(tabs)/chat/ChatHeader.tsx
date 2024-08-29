import { ThemedText, ThemedView } from '@/components'
import cn from 'classnames'
import { Image, Pressable, View } from 'react-native'
import { useAppStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'
import Feather from '@expo/vector-icons/Feather'
import { useThemeColor } from '@/hooks/useThemeColor'
const ChatHeader = () => {
  const [user] = useAppStore(useShallow((state) => [state.user]))
  const color = useThemeColor({}, 'text')
  return (
    <ThemedView className={cn('h-20 gap-2 flex-row justify-between px-4 items-center')}>
      <View className={'flex-row gap-2'}>
        <Image
          source={{
            uri: 'https://img0.baidu.com/it/u=2466234110,1260554666&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1725037200&t=09dbac44e2723a756f844da289d62a3d',
          }}
          className={'w-12 h-12 rounded-full'}
          resizeMode={'cover'}
        />
        <View>
          <ThemedText className={'font-bold !text-xl'}>{user?.name}</ThemedText>
          <ThemedText className={'!text-sm opacity-50'}>{user?.domainName}</ThemedText>
        </View>
      </View>
      <Pressable
        onPress={() => {
          console.log('点击搜索页')
        }}>
        <Feather name={'search'} color={color} size={24} />
      </Pressable>
    </ThemedView>
  )
}
export default ChatHeader
