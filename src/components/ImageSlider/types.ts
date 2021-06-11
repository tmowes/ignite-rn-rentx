import { ViewToken } from 'react-native'

import { Photo } from '../../dtos'

export type ImageSliderProps = {
  thumbnails: Photo[]
}
export type DotIndexProps = {
  active: boolean
}

export type ChangeImgProps = {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}
