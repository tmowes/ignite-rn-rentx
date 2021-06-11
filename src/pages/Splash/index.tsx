import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import BrandIcon from '../../assets/brand.svg'
import Logo from '../../assets/logo.svg'
import * as S from './styles'
import { useAuth } from '../../contexts'

export const Splash = () => {
  const { user } = useAuth()
  const { navigate } = useNavigation()
  const splashAnimation = useSharedValue(0)

  const animatedBrand = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 25, 50], [1, 1, 0]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [0, 80],
          Extrapolate.CLAMP
        ),
      },
      {
        scale: interpolate(
          splashAnimation.value,
          [0, 25, 50],
          [1, 0.5, 0.3],
          Extrapolate.CLAMP
        ),
      },
    ],
  }))
  const animatedLogo = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0, 1]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [-80, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }))

  const startApp = () => navigate(!user?.id ? 'SignIn' : 'Home')

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet'

      runOnJS(startApp)()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <S.AnimatedBrand style={animatedBrand}>
        <BrandIcon width={RFValue(80)} height={RFValue(50)} />
      </S.AnimatedBrand>
      <S.AnimatedLogo style={animatedLogo}>
        <Logo width={RFValue(180)} height={RFValue(20)} />
      </S.AnimatedLogo>
    </S.Container>
  )
}
