// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { type IconProps } from '@expo/vector-icons/build/createIconSet'
import { type ComponentProps } from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ActivityIndicator } from '@ant-design/react-native'
import { ActivityIndicatorNativeProps } from '@ant-design/react-native/lib/activity-indicator'

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={18} style={[{ marginBottom: -3 }, style]} {...rest} />
}
export function FontAwesomeIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof FontAwesome>['name']>) {
  const color = useThemeColor({}, 'text')
  return <FontAwesome size={18} style={[{ marginBottom: -3, color: color }, style]} {...rest} />
}

export function LoadingIcon(props: ActivityIndicatorNativeProps & { primary?: boolean }) {
  const { color, primary, ...restProps } = props
  const _color = useThemeColor({}, 'text')
  const primaryColor = useThemeColor({}, 'primary')
  return (
    <ActivityIndicator color={color ? color : primary ? primaryColor : _color} {...restProps} />
  )
}
