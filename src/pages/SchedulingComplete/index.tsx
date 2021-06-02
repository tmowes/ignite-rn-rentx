import React from 'react'
import { StatusBar, useWindowDimensions } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import * as C from '../../components'
import * as S from './styles'

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions()
  const { navigate } = useNavigation()
  const { colors } = useTheme()
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
          onPress={() => navigate('Home')}
        />
      </S.Footer>
    </S.Container>
  )
}
