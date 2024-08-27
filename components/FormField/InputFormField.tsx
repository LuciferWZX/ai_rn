import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import cn from 'classnames'
import { Image, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Icon from '@/assets/icons/eyes-open.svg'
import icons from '@/constants/Icons'
import { Entypo } from '@expo/vector-icons'

interface InputFormFieldProps<T> {
  title?: string
  value?: T
  placeholder?: string
  onValueChange?: (value: T) => void
  boxClassName?: string
  secureTextEntry?: boolean
}
const InputFormField = <T = any,>(props: InputFormFieldProps<T>) => {
  const { boxClassName, title, placeholder, secureTextEntry } = props
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
          secureTextEntry={secureTextEntry && showPassword}
          className={cn('w-full text-base flex-1 dark:text-white ')}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color={'#374151'} />
          </TouchableOpacity>
        )}
      </ThemedView>
    </ThemedView>
  )
}
export default InputFormField
