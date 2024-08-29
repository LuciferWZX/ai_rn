import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import { Pressable, TouchableHighlight, TouchableOpacity, View, ViewProps } from 'react-native'
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
  const cardBackground = useThemeColor({ light: lightColor, dark: darkColor }, 'cardBackground')
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
            className={cn(`rounded-lg p-3`)}>
            <View className={'flex-col gap-2 group-active:bg-red-500'}>
              <ThemedText>{title}</ThemedText>
              <View>
                <ThemedText className={cn('text-gray-500 text-sm')}>{desc}</ThemedText>
              </View>
            </View>
          </ThemedView>
        </SwipeAction>
      </GestureHandlerRootView>
    </Pressable>
  )
}
export default ListItem
