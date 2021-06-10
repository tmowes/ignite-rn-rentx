import React from 'react'

import { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

import * as S from './styles'
import { BulletsDotsProps } from './types'

export const BulletsDots = (props: BulletsDotsProps) => {
  const { index, currIndex } = props

  const animatedDot = useAnimatedStyle(() => ({
    opacity: interpolate(
      currIndex.value,
      [index - 1, index, index + 1],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        scale: interpolate(
          currIndex.value,
          [index - 1, index, index + 1],
          [0.8, 1.2, 0.8],
          Extrapolate.CLAMP
        ),
      },
    ],
  }))

  return <S.Dot style={animatedDot} />
}
