import { ViewToken } from 'react-native'

export type ImageSliderProps = {
  thumbnails: string[]
}
export type DotIndexProps = {
  active: boolean
}

export type ChangeImgProps = {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}
