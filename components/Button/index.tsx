import { TouchableOpacity } from 'react-native'
import { ThemedText } from '../ThemedText'
import { cloneElement, ReactElement, ReactNode, useCallback, useMemo } from 'react'
import cn from 'classnames'
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes'
interface ButtonProps {
  children?: ReactNode
  disabled?: boolean
  loading?: boolean
  containerClassName?: string
  textClassName?: string
  size?: 'small' | 'medium' | 'large'
  icon?: ReactElement
  onPress?: (event: GestureResponderEvent) => void
  type?: 'link'
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
    type,
    icon,
  } = props
  const mergedDisabled = useMemo(() => disabled || loading, [disabled, loading])
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={mergedDisabled}
      // onPress={mergedDisabled ? undefined : onPress}
      onPressOut={onPress}
      // style={{ backgroundColor: colors.primary }}
      className={cn(
        ` rounded-xl gap-2 flex-row justify-center items-center bg-primary`,
        {
          'opacity-50': mergedDisabled,
          'min-h-[62px] px-6 ': size === 'large',
          'min-h-[44px] px-4': size === 'medium',
          'min-h-[32px] px-2': size === 'small',
          'bg-transparent': type === 'link',
        },
        containerClassName,
      )}>
      {icon}
      <ThemedText
        className={cn(
          `font-bold`,
          {
            'text-lg': size === 'large',
            'text-md': size === 'medium',
            'text-sm': size === 'small',
            '!text-primary': type === 'link',
          },
          textClassName,
        )}>
        {children}
      </ThemedText>
    </TouchableOpacity>
  )
}
export default Button
