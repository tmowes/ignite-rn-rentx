import { RectButtonProps } from 'react-native-gesture-handler'

import { ModelCar } from '../../databases'

export type CarCardProps = RectButtonProps & {
  data: ModelCar
}
