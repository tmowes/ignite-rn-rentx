export type CarCardProps = {
  data: CarProps
}

export type CarProps = {
  brand: string
  model: string
  thumbnail: string
  rent: RentProps
}

export type RentProps = {
  period: string
  price: number
}
