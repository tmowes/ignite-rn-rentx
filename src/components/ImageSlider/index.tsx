import React from 'react'

import * as S from './styles'
import { ImageSliderProps } from './types'

export const ImageSlider = (props: ImageSliderProps) => {
  const { thumbnails } = props
  return (
    <S.Container>
      <S.DotsContainer>
        <S.DotIndex active />
        <S.DotIndex active={false} />
        <S.DotIndex active={false} />
        <S.DotIndex active={false} />
      </S.DotsContainer>
      <S.CarImageContainer>
        <S.CarImage source={{ uri: thumbnails[0] }} resizeMode="contain" />
      </S.CarImageContainer>
    </S.Container>
  )
}
