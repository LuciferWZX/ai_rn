import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import cn from 'classnames'
import { TextInput, TouchableOpacity } from 'react-native'
import { ReactNode, useState } from 'react'
import { Entypo } from '@expo/vector-icons'

interface InputFormFieldProps {
  title?: string
  value?: string
  placeholder?: string
  onValueChange?: (value: string) => void
  boxClassName?: string
  secureTextEntry?: boolean
  suffix?: ReactNode
}
const InputFormField = (props: InputFormFieldProps) => {
  const { boxClassName, title, placeholder, onValueChange, suffix, secureTextEntry } = props
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <ThemedView className={cn(`space-y-2`, boxClassName)}>
      <ThemedText className={cn('text-base text-gray-400 font-medium')}>{title}</ThemedText>
      <ThemedView
        className={cn(
          'w-full h-16 px-4 bg-black/30 border-black/10 border-2 rounded-2xl focus:border-primary-600 items-center flex-row',
        )}>
        <TextInput
          placeholder={placeholder}
          style={{
            fontFamily: 'SpaceMono',
          }}
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
