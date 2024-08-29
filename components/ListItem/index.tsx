import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import { Image, Pressable, View, ViewProps } from 'react-native'
import { ReactNode } from 'react'
import cn from 'classnames'
import { useThemeColor } from '@/hooks/useThemeColor'
import { SwipeAction } from '@ant-design/react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
interface ListItemProps extends Omit<ViewProps, 'children'> {
  title?: ReactNode
  desc?: ReactNode
  lightColor?: string
  darkColor?: string
}
const ListItem = (props: ListItemProps) => {
  const { title, lightColor, desc, style, darkColor } = props
  const dangerBackground = useThemeColor({ light: lightColor, dark: darkColor }, 'dangerBackground')
  return (
    <Pressable
      className={'group'}
      onLongPress={() => {
        console.log(5555)
      }}>
      <GestureHandlerRootView>
        <SwipeAction
          right={[{ text: '删除', backgroundColor: dangerBackground }]}
          closeOnAction
          closeOnTouchOutside>
          <ThemedView
            style={[
              // { backgroundColor: cardBackground },
              style,
            ]}
            className={cn(`flex-row gap-2 items-center   rounded-lg p-3 group-active:!bg-card`)}>
            <Image
              className={'w-12 h-12 rounded-full'}
              resizeMode={'cover'}
              source={{
                uri: 'https://img0.baidu.com/it/u=3055253293,3355745021&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1725037200&t=c967f76f8bad5d79ae0d5d77aa8a5484',
              }}
            />
            <View className={`flex-col gap-2 flex-1`}>
              <ThemedText numberOfLines={1} className={'truncate'}>
                {title}
                {title}
                {title}
                {title}
                {title}
                {title}
              </ThemedText>
              <View>
                <ThemedText className={cn('opacity-50 !text-sm')}>{desc}</ThemedText>
              </View>
            </View>
          </ThemedView>
        </SwipeAction>
      </GestureHandlerRootView>
    </Pressable>
  )
}
export default ListItem
