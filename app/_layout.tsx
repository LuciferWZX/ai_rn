import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { useColorScheme } from '@/hooks/useColorScheme'
import { Provider } from '@ant-design/react-native'
import useInitialApp from '@/hooks/useInitialApp'
import '../global.css'
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync().then()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const { initialApp, loading, setLoading } = useInitialApp()
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    AntOutLine: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
  })

  useEffect(() => {
    if (error) {
      throw error
    }
    if (loaded) {
      initialApp().finally(() => {
        setLoading(false)
        SplashScreen.hideAsync().then()
      })
    }
  }, [loaded, error, initialApp, setLoading])
  if ((!loaded && !error) || loading) {
    return null
  }

  return (
    <Provider theme={colorScheme === 'dark' ? { toast_fill: '#30363D' } : DefaultTheme}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name={'index'} options={{ headerShown: false }} />
          <Stack.Screen name={'(auth)'} options={{ headerShown: false }} />
          <Stack.Screen name={'(tabs)'} options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </Provider>
  )
}
