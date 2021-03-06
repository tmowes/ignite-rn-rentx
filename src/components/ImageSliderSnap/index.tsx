import React from 'react'
import { useWindowDimensions } from 'react-native'

import FastImage from 'react-native-fast-image'
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'

import { BulletsDots } from '../BulletsDots'
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
          <BulletsDots key={String(i)} index={i} currIndex={currIndex} />
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
          <S.CarImageContainer key={item.id}>
            <S.CarImage
              source={{ uri: item.photo }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </S.CarImageContainer>
        ))}
      </Animated.ScrollView>
    </S.Container>
  )
}
