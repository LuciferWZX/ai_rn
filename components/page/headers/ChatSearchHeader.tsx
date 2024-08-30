import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { SafeAreaView, View } from 'react-native'
import { Button, InputFormField, ThemedView } from '@/components'
import { useThemeColor } from '@/hooks/useThemeColor'
import useChatStore from '@/stores/useChatStore'
import { useShallow } from 'zustand/react/shallow'

const ChatSearchHeader = (props: NativeStackHeaderProps) => {
  const { options, navigation } = props
  const headerBgColor = useThemeColor({}, 'header')
  const [search] = useChatStore(useShallow((state) => [state.search]))
  return (
    <ThemedView
      style={[{ backgroundColor: headerBgColor }, options.headerStyle]}
      className={'h-34'}>
      <SafeAreaView>
        <View className={'h-20 flex-row items-center px-4 gap-2'}>
          <InputFormField
            value={search}
            onValueChange={(v) => useChatStore.setState({ search: v })}
            boxClassName={'!bg-transparent flex-1'}
            placeholder="请输入名称查询"
          />
          <View>
            <Button type={'link'} onPress={() => navigation.pop(1)}>
              取消
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}
export default ChatSearchHeader
