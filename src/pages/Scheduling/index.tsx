import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { DateObject } from 'react-native-calendars'

import ArrowIcon from '../../assets/arrow.svg'
import * as C from '../../components'
import * as S from './styles'

export const Scheduling = () => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  const [lastSelectedDate, setLastSelectedDate] = useState<DateObject>({} as DateObject)
  const handleDateChange = (date: DateObject) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date
    if (start.timestamp > end.timestamp) {
      const temp = end
      end = start
      start = temp
    }
    setLastSelectedDate(end)
  }
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
        <C.CustomCalendar markedDate={() => true} onDayPress={handleDateChange} />
      </S.Content>
      <S.Footer>
        <C.LabelButton label="Confirmar" onPress={() => navigate('SchedulingDetails')} />
      </S.Footer>
    </S.Container>
  )
}
