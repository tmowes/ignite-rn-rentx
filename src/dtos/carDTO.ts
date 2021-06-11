export type Car = {
  id: string
  brand: string
  name: string
  about: string
  period: string
  price: number
  fuel_type: string
  thumbnail: string
  accessories: Accessory[]
  photos: Photo[]
}

export type Accessory = {
  id: string
  car_id: string
  type: string
  name: string
}

export type Photo = {
  id: string
  car_id: string
  photo: string
}

export type CarByUser = {
  car: Car
  id: string
  user_id: string
  startDate: string
  endDate: string
}
