import { ThemedText, ThemedView } from '@/components'
import { useEffect } from 'react'

const ProfilePage = () => {
  useEffect(() => {
    console.log('profile')
  }, [])
  return (
    <ThemedView>
      <ThemedText>ProfilePage</ThemedText>
    </ThemedView>
  )
}
export default ProfilePage
