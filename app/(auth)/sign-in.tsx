import { Button, InputFormField, ThemedText, ThemedView } from '@/components'
import cn from 'classnames'
import { Image, SafeAreaView, ScrollView } from 'react-native'
import { Images } from '@/constants'
import { useState } from 'react'
import { Link } from 'expo-router'
import { ActivityIndicator } from '@ant-design/react-native'
import useSignIn from '@/hooks/useSignIn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Feather } from '@expo/vector-icons'
import MD5 from 'crypto-js/md5'
interface LoginFormType {
  username: string
  password: string
}
const SignIn = () => {
  const { getTenantInfo, getInfoLoading, domain, setDomain, canLogin, signIn, signInLoading } =
    useSignIn()
  const [form, setForm] = useState<LoginFormType>({
    username: '',
    password: '',
  })
  const submit = async () => {
    await signIn({
      name: form.username,
      password: MD5(form.password).toString(),
      domain: domain,
      appId: process.env.EXPO_PUBLIC_APP_ID as string,
    })
  }
  //校验租户
  const validateTenants = async () => {
    await getTenantInfo(domain)
  }
  return (
    <ThemedView className={cn('h-full')}>
      <SafeAreaView className={cn('h-full')}>
        <KeyboardAwareScrollView>
          <ScrollView>
            <ThemedView className={'w-full px-4 my-6 justify-center h-full'}>
              <Image source={Images.Logo} resizeMode={'contain'} className={'h-9 w-28'} />
              <ThemedText className={'font-semibold text-2xl mt-10'}>登录到AI Agent</ThemedText>
              <InputFormField
                enablesReturnKeyAutomatically={true}
                enterKeyHint={'done'}
                title={'租户'}
                placeholder={'请输入租户'}
                value={domain}
                boxClassName={'mt-7'}
                onSubmitEditing={() => validateTenants()}
                onValueChange={(value) => setDomain(value)}
                suffix={
                  <Button
                    containerClassName={cn({ '!bg-green-600': canLogin })}
                    disabled={domain === ''}
                    loading={getInfoLoading}
                    onPress={canLogin ? undefined : validateTenants}>
                    {canLogin ? <Feather name={'check'} size={24} /> : '验证'}
                  </Button>
                }
              />
              <InputFormField
                title={'用户名'}
                placeholder={'请输入用户名'}
                value={form.username}
                boxClassName={'mt-7'}
                enterKeyHint={'done'}
                onValueChange={(value) => setForm({ ...form, username: value })}
              />
              <InputFormField
                title={'密码'}
                secureTextEntry={true}
                boxClassName={'mt-7'}
                placeholder={'请输入密码'}
                value={form.password}
                enterKeyHint={'done'}
                onValueChange={(value) => setForm({ ...form, password: value })}
              />
              <Button
                onPress={submit}
                disabled={!canLogin || signInLoading}
                containerClassName={'mt-7'}
                size={'large'}>
                {canLogin ? '登录' : '请验证租户'}
              </Button>
              <ThemedView className={'pt-5 flex-row  justify-center'}>
                <ThemedText className={'text-lg text-gray-400'}>还没有账号？</ThemedText>
                <Link href={'/sign-up'} className={'text-lg text-primary font-extrabold'}>
                  注册
                </Link>
              </ThemedView>
            </ThemedView>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>

      <ActivityIndicator
        animating={getInfoLoading || signInLoading}
        toast
        size="large"
        text={getInfoLoading ? '验证中...' : '登录中...'}
      />
    </ThemedView>
  )
}
export default SignIn
