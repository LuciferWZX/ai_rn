import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import { ReactNode } from 'react'
interface EmptyProps {
  title?: ReactNode
}
const Empty = (props: EmptyProps) => {
  const { title } = props
  return (
    <ThemedView className={'h-60  flex items-center justify-center'}>
      <ThemedText>{title ? title : '暂无数据'}</ThemedText>
    </ThemedView>
  )
}
export default Empty
