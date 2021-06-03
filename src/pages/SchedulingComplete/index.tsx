import React, { useEffect } from 'react'
import { StatusBar, useWindowDimensions } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import * as C from '../../components'
import * as S from './styles'

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions()
  const { navigate } = useNavigation()
  const { colors } = useTheme()
  const completeAnimation = useSharedValue(0)

  const animatedDuration = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          completeAnimation.value,
          [0, 25, 100],
          [0, 0, -160],
          Extrapolate.CLAMP
        ),
      },
    ],
  }))

  const startApp = () => navigate('SchedulesList')

  useEffect(() => {
    completeAnimation.value = withTiming(
      100,
      { duration: 2500 },

      () => {
        'worklet'

        runOnJS(startApp)()
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <LogoSvg width={width} />
      <S.Content>
        <DoneSvg width={RFValue(80)} height={RFValue(80)} />
        <S.Title>Carro alugado!</S.Title>
        <S.Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </S.Message>
      </S.Content>
      <S.Footer>
        <C.LabelButton
          label="Ok"
          color={colors.shapeSec}
          onPress={() => navigate('SchedulesList')}
        />
        <S.DurationContainer>
          <S.DurationAnimated style={animatedDuration} />
        </S.DurationContainer>
      </S.Footer>
    </S.Container>
  )
}
