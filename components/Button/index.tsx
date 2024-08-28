import { TouchableOpacity } from 'react-native'
import { ThemedText } from '../ThemedText'
import { ReactNode, useMemo } from 'react'
import cn from 'classnames'
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes'
interface ButtonProps {
  children?: ReactNode
  disabled?: boolean
  loading?: boolean
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
    loading,
    textClassName,
    onPress,
    size = 'medium',
  } = props
  const mergedDisabled = useMemo(() => disabled || loading, [disabled, loading])
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={mergedDisabled}
      onPress={mergedDisabled ? undefined : onPress}
      // style={{ backgroundColor: colors.primary }}
      className={cn(
        ` rounded-xl justify-center items-center bg-primary`,
        {
          'opacity-50': mergedDisabled,
          'min-h-[62px]': size === 'large',
          'min-h-[44px]': size === 'medium',
          'min-h-[32px]': size === 'small',
        },
        containerClassName,
      )}>
      <ThemedText
        className={cn(
          `font-bold`,
          {
            'text-lg px-6': size === 'large',
            'text-md px-4': size === 'medium',
            'text-sm px-2': size === 'small',
          },
          textClassName,
        )}>
        {children}
      </ThemedText>
    </TouchableOpacity>
  )
}
export default Button
