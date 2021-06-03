import { Car } from '../../dtos'

export type RouteParams = {
  car: Car
  dates: string[]
}

export type RentalPeriod = {
  startFormatted: string
  endFormatted: string
}
