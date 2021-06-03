import React from 'react'

import LottieView from 'lottie-react-native'

import carAnimation from '../../assets/car_load_animation.json'
import * as S from './styles'

export const LoadAnimation = () => (
  <S.Container>
    <LottieView
      source={carAnimation}
      style={{ height: 160 }}
      resizeMode="contain"
      autoPlay
      loop
    />
  </S.Container>
)
