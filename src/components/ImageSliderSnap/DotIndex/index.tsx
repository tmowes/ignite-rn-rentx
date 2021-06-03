import React from 'react'

import { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

import * as S from './styles'
import { DotIndexProps } from './types'

export const DotIndex = (props: DotIndexProps) => {
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
