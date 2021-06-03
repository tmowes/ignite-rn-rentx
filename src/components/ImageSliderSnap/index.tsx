import React from 'react'
import { useWindowDimensions } from 'react-native'

import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'

import { DotIndex } from './DotIndex'
import * as S from './styles'
import { ImageSliderProps } from './types'

export const ImageSliderSnap = (props: ImageSliderProps) => {
  const { thumbnails } = props
  const { width: sWidth } = useWindowDimensions()
  const x = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x
    },
  })

  const currIndex = useDerivedValue(() => x.value / sWidth)

  return (
    <S.Container>
      <S.DotsContainer>
        {thumbnails.map((_, i) => (
          <DotIndex key={String(i)} index={i} currIndex={currIndex} />
        ))}
      </S.DotsContainer>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        snapToInterval={sWidth}
        decelerationRate="fast"
        bounces={false}
        scrollEventThrottle={16}
      >
        {thumbnails.map(item => (
          <S.CarImageContainer key={item}>
            <S.CarImage source={{ uri: item }} resizeMode="contain" />
          </S.CarImageContainer>
        ))}
      </Animated.ScrollView>
    </S.Container>
  )
}
