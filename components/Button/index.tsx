import { TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ThemedText } from '../ThemedText'
import { ReactNode } from 'react'
import cn from 'classnames'
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes'
interface ButtonProps {
  children?: ReactNode
  disabled?: boolean
  isLoading?: boolean
  containerClassName?: string
  textClassName?: string
  size?: 'small' | 'medium' | 'large'
  onPress?: (event: GestureResponderEvent) => void
}
const Button = (props: ButtonProps) => {
  const {
    children,
    disabled,
    containerClassName,
    isLoading,
    textClassName,
    onPress,
    size = 'medium',
  } = props
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || isLoading}
      onPress={onPress}
      style={{ backgroundColor: colors.primary }}
      className={cn(
        `rounded-xl justify-center items-center ${containerClassName ? containerClassName : ''}`,
        {
          'min-h-[62px]': size === 'large',
          'min-h-[44px]': size === 'medium',
          'min-h-[32px]': size === 'small',
        },
      )}>
      <ThemedText className={cn(`font-bold text-lg`, textClassName)}>{children}</ThemedText>
    </TouchableOpacity>
  )
}
export default Button
