import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name={'sign-in'} options={{ headerShown: false }} />
        <Stack.Screen name={'sign-up'} />
      </Stack>
    </>
  )
}
export default AuthLayout
