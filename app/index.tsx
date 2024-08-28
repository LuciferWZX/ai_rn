import { Button, ThemedText, ThemedView } from '@/components'
import { Image, SafeAreaView, ScrollView } from 'react-native'
import { Images } from '@/constants'
import { router } from 'expo-router'
import { useState } from 'react'
const App = () => {
  const [isLock, setIsLock] = useState<boolean>(false)
  return (
    <ThemedView>
      <SafeAreaView>
        <ThemedView className={'h-full'}>
          <ScrollView contentContainerStyle={{ height: '100%' }}>
            <ThemedView className={'justify-center items-center h-full w-full px-4'}>
              <Image source={Images.Logo} className={'w-40 h-16'} resizeMode={'contain'} />
              <Image
                source={Images.Cards}
                // @ts-ignore
                className={'max-w-80 w-full h-72'}
                resizeMode={'contain'}
              />
              <ThemedView>
                <ThemedText className={'text-2xl font-bold'}>
                  这是属于你的{' '}
                  <ThemedText className={'text-2xl text-orange-400'}>AI Agent</ThemedText>
                </ThemedText>
              </ThemedView>
              <ThemedText className={'text-sm font-mono text-gray-400 mt-7 text-center'}>
                你可以创建属于你的个性化AI Agent，处理任何你想做的事情，工作流
              </ThemedText>
              <Button
                containerClassName={'w-full mt-7'}
                size={'large'}
                onPress={() => {
                  if (!isLock) {
                    router.push('/sign-in')
                    setIsLock(true)
                  }
                  setTimeout(() => {
                    setIsLock(false)
                  }, 500)
                }}>
                使用户名继续
              </Button>
            </ThemedView>
          </ScrollView>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  )
}
export default App
