import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { useTheme } from 'styled-components/native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import * as C from '../../components'
import * as S from './styles'
import { api } from '../../services'
import { RentalData } from './types'

export const SchedulesList = () => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  const isScreenFocused = useIsFocused()
  const [cars, setCars] = useState<RentalData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadAppointments = async () => {
    try {
      const { data } = await api.get<RentalData[]>('rentals')
      const formattedData = data.map(rent => ({
        ...rent,
        start_date: format(parseISO(rent.start_date), 'dd/MM/yyyy'),
        end_date: format(parseISO(rent.end_date), 'dd/MM/yyyy'),
      }))
      setCars(formattedData)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadAppointments()
  }, [isScreenFocused])

  return (
    <S.Container>
      <S.Header>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <C.IconButton color={colors.shape} onPress={() => navigate('Home')} />
        <S.Title>
          Seus agendamentos, {'\n'}
          estão aqui.
        </S.Title>
        <S.SubTitle>Conforto, segurança e praticidade.</S.SubTitle>
      </S.Header>
      {isLoading ? (
        <C.LoadAnimation />
      ) : (
        <S.Content>
          <S.Appointments>
            <S.AppointmentTitle>Agendamentos feitos</S.AppointmentTitle>
            <S.AppointmentQuantity>{cars.length}</S.AppointmentQuantity>
          </S.Appointments>
          <S.CarsList
            data={cars}
            keyExtractor={item => String(item.id)}
            renderItem={({ item: { car, start_date, end_date } }) => (
              <S.CarWrapper>
                <C.CarCard data={car} />
                <S.CarFooter>
                  <S.CarFooterTitle>Período</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>{start_date}</S.CarFooterDate>
                    <S.ArrowIcon />
                    <S.CarFooterDate>{end_date}</S.CarFooterDate>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWrapper>
            )}
          />
        </S.Content>
      )}
    </S.Container>
  )
}
