import { ModelCar } from '../../databases'

export type RentalData = {
  id: string
  start_date: string
  end_date: string
  car: ModelCar
}
