import { RectButtonProps } from 'react-native-gesture-handler'

import { Car } from '../../dtos'

export type CarCardProps = RectButtonProps & {
  data: Car
}
