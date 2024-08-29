import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import cn from 'classnames'
import { EnterKeyHintTypeOptions, TextInput, TouchableOpacity } from 'react-native'
import { ReactNode, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'
import { StyleProps } from 'react-native-reanimated'
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes'
import { TextInputSubmitEditingEventData } from 'react-native/Libraries/Components/TextInput/TextInput'

interface InputFormFieldProps {
  title?: string
  value?: string
  placeholder?: string
  onValueChange?: (value: string) => void
  boxClassName?: string
  secureTextEntry?: boolean
  enablesReturnKeyAutomatically?: boolean
  suffix?: ReactNode
  lightColor?: string
  darkColor?: string
  enterKeyHint?: EnterKeyHintTypeOptions
  style?: StyleProps
  onSubmitEditing?: ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void) | undefined
}
const InputFormField = (props: InputFormFieldProps) => {
  const {
    boxClassName,
    title,
    lightColor,
    darkColor,
    placeholder,
    onValueChange,
    suffix,
    enterKeyHint,
    secureTextEntry,
    enablesReturnKeyAutomatically,
    style,
    onSubmitEditing,
  } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'inputBackground')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <ThemedView className={cn(`space-y-2`, boxClassName)}>
      <ThemedText className={cn('text-base text-gray-400 font-medium')}>{title}</ThemedText>
      <ThemedView
        className={cn(`w-full h-16 px-4  border-2 rounded-2xl items-center flex-row`)}
        style={[{ backgroundColor }, style]}>
        <TextInput
          enterKeyHint={enterKeyHint}
          placeholder={placeholder}
          enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
          style={{
            fontFamily: 'SpaceMono',
          }}
          onSubmitEditing={onSubmitEditing}
          onChangeText={(v) => onValueChange?.(v)}
          secureTextEntry={secureTextEntry && showPassword}
          className={cn('w-full text-base flex-1 dark:text-white ')}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color={'#374151'} />
          </TouchableOpacity>
        )}
        {suffix}
      </ThemedView>
    </ThemedView>
  )
}
export default InputFormField
