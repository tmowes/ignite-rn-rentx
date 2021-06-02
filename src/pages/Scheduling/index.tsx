import React from 'react'
import { StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import ArrowIcon from '../../assets/arrow.svg'
import * as C from '../../components'
import * as S from './styles'

export const Scheduling = () => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  return (
    <S.Container>
      <S.Header>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <C.IconButton color={colors.shape} />
        <S.Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim do aluguel
        </S.Title>
        <S.RentPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected>18/06/2021</S.DateValue>
          </S.DateInfo>
          <ArrowIcon />
          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>18/06/2021</S.DateValue>
          </S.DateInfo>
        </S.RentPeriod>
      </S.Header>
      <S.Content>
        <C.CustomCalendar />
      </S.Content>
      <S.Footer>
        <C.LabelButton label="Confirmar" onPress={() => navigate('SchedulingDetails')} />
      </S.Footer>
    </S.Container>
  )
}
