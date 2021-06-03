import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import format from 'date-fns/format'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { DateObject } from 'react-native-calendars'

import ArrowIcon from '../../assets/arrow.svg'
import * as C from '../../components'
import * as S from './styles'
import { generateInterval } from '../../utils/generateInterval'
import { MarkedDateProps } from '../../components/CustomCalendar/types'
import { RentalPeriod } from './types'
import { getPlatformDate } from '../../utils'
import { RouteParams } from '../CarDetails/types'

export const Scheduling = () => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  const { params } = useRoute()

  const [lastSelectedDate, setLastSelectedDate] = useState<DateObject>({} as DateObject)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const { car } = params as RouteParams

  const handleDateChange = (date: DateObject) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date
    if (start.timestamp > end.timestamp) {
      const temp = end
      end = start
      start = temp
    }
    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)
    const firstDate = Object.keys(interval)[0]
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1]
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy'),
    })
  }

  const handleConfirmRental = () => {
    const rentDetails = {
      car,
      dates: Object.keys(markedDates),
    }
    navigate('SchedulingDetails', { ...rentDetails })
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
            <S.DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </S.DateValue>
          </S.DateInfo>
          <ArrowIcon />
          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </S.DateValue>
          </S.DateInfo>
        </S.RentPeriod>
      </S.Header>
      <S.Content>
        <C.CustomCalendar markedDate={markedDates} onDayPress={handleDateChange} />
      </S.Content>
      <S.Footer>
        <C.LabelButton
          label="Confirmar"
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.endFormatted}
        />
      </S.Footer>
    </S.Container>
  )
}
