export type Car = {
  id: string
  brand: string
  model: string
  about: string
  rent: Rent
  fuel_type: string
  thumbnail: string
  accessories: Accessory[]
  photos: string[]
}

export type Accessory = {
  type: string
  name: string
}

export type Rent = {
  period: string
  price: number
}

export type CarByUser = {
  car: Car
  id: string
  user_id: string
  startDate: string
  endDate: string
}
