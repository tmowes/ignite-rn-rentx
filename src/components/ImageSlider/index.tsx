import React, { useRef, useState } from 'react'
import { FlatList } from 'react-native'

import * as S from './styles'
import { ChangeImgProps, ImageSliderProps } from './types'

export const ImageSlider = (props: ImageSliderProps) => {
  const { thumbnails } = props
  const [imgIndex, setImgIndex] = useState(0)
  const indexChanged = useRef((info: ChangeImgProps) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setImgIndex(info.viewableItems[0].index!)
  })
  return (
    <S.Container>
      <S.DotsContainer>
        {thumbnails.map((_, i) => (
          <S.DotIndex key={String(i)} active={i === imgIndex} />
        ))}
      </S.DotsContainer>
      <FlatList
        data={thumbnails}
        keyExtractor={key => key}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item }) => (
          <S.CarImageContainer>
            <S.CarImage source={{ uri: item }} resizeMode="contain" />
          </S.CarImageContainer>
        )}
      />
    </S.Container>
  )
}
