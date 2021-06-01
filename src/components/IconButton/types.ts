import { BorderlessButtonProps } from 'react-native-gesture-handler'

export type IconButtonProps = BorderlessButtonProps & {
  name?: 'chevron-left' | 'chevron-right'
  color?: string
}
