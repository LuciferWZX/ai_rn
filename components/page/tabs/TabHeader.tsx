import { ThemedText, ThemedView } from '@/components'
import cn from 'classnames'
import { Image, Pressable, SafeAreaView, View } from 'react-native'
import { useAppStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'
import Feather from '@expo/vector-icons/Feather'
import { useThemeColor } from '@/hooks/useThemeColor'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { router, usePathname } from 'expo-router'
import { match } from 'ts-pattern'
import useChatStore from '@/stores/useChatStore'
const TabHeader = (props: NativeStackHeaderProps) => {
  const { options } = props
  const [user] = useAppStore(useShallow((state) => [state.user]))
  const color = useThemeColor({}, 'text')
  const headerBgColor = useThemeColor({}, 'header')
  const pathname = usePathname()
  const renderHeaderRightActions = () => {
    return match(pathname)
      .with('/chat', '/chat_search', () => {
        return (
          <View className={'flex-row gap-2 items-center justify-between flex-1'}>
            <View>
              <ThemedText className={'font-bold !text-xl'}>{user?.name}</ThemedText>
              <ThemedText className={'!text-sm opacity-50'}>{user?.domainName}</ThemedText>
            </View>
            <Pressable
              onPressOut={() => {
                useChatStore.setState({ search: '' })
                router.push('/chat_search')
              }}>
              <Feather name={'search'} color={color} size={24} />
            </Pressable>
          </View>
        )
      })
      .otherwise(() => null)
  }
  return (
    <ThemedView
      style={[{ backgroundColor: headerBgColor }, options.headerStyle]}
      className={'h-34'}>
      <SafeAreaView>
        <View className={cn('h-20 gap-2 flex-row  px-4 items-center')}>
          <Image
            source={{
              uri: 'https://img0.baidu.com/it/u=2466234110,1260554666&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1725037200&t=09dbac44e2723a756f844da289d62a3d',
            }}
            className={'w-12 h-12 rounded-full'}
            resizeMode={'cover'}
          />
          {renderHeaderRightActions()}
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}
export default TabHeader
