import { Button, InputFormField, ThemedText, ThemedView } from '@/components'
import cn from 'classnames'
import { Image, SafeAreaView, ScrollView } from 'react-native'
import { Images } from '@/constants'
import { useState } from 'react'
import { Link } from 'expo-router'
interface LoginFormType {
  username: string
  password: string
}
const SignIn = () => {
  const [form, setForm] = useState<LoginFormType>({
    username: '',
    password: '',
  })
  const submit = () => {
    console.log('sub', form)
  }
  return (
    <ThemedView className={cn('h-full')}>
      <SafeAreaView>
        <ScrollView>
          <ThemedView className={'w-full px-4 my-6 justify-center h-full'}>
            <Image source={Images.Logo} resizeMode={'contain'} className={'h-9 w-28'} />
            <ThemedText className={'font-semibold text-2xl mt-10'}>登录到AI Agent</ThemedText>
            <InputFormField<string>
              title={'用户名'}
              placeholder={'请输入用户名'}
              value={form.username}
              boxClassName={'mt-7'}
              onValueChange={(value) => setForm({ ...form, username: value })}
            />
            <InputFormField<string>
              title={'密码'}
              secureTextEntry={true}
              boxClassName={'mt-7'}
              placeholder={'请输入密码'}
              value={form.password}
              onValueChange={(value) => setForm({ ...form, password: value })}
            />
            <Button onPress={submit} isLoading={true} containerClassName={'mt-7'} size={'large'}>
              登录
            </Button>
            <ThemedView className={'pt-5 flex-row  justify-center'}>
              <ThemedText className={'text-lg text-gray-400'}>还没有账号？</ThemedText>
              <Link href={'/sign-up'} className={'text-lg text-primary font-extrabold'}>
                注册
              </Link>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  )
}
export default SignIn
