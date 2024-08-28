import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { useColorScheme } from '@/hooks/useColorScheme'
import { Provider } from '@ant-design/react-native'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync().then()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    AntOutLine: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
  })

  useEffect(() => {
    if (error) {
      throw error
    }
    if (loaded) {
      SplashScreen.hideAsync().then()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Provider theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name={'index'} options={{ headerShown: false }} />
          <Stack.Screen name={'(auth)'} options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </Provider>
  )
}
