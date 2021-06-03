import { RectButtonProps } from 'react-native-gesture-handler'

export type LabelButtonProps = RectButtonProps & {
  label: string
  color?: string
  loading?: boolean
}
export type StyledProps = {
  color?: string
}
