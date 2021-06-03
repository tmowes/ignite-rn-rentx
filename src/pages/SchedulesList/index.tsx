import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { useTheme } from 'styled-components/native'

import * as C from '../../components'
import * as S from './styles'
import { CarByUser } from '../../dtos/carDTO'
import { api } from '../../services'

export const SchedulesList = () => {
  const { colors } = useTheme()
  const [cars, setCars] = useState<CarByUser[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadAppointments = async () => {
    try {
      const { data } = await api.get('/schedules_byuser?user_id=1')
      setCars(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadAppointments()
  }, [])

  return (
    <S.Container>
      <S.Header>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <C.IconButton color={colors.shape} />
        <S.Title>
          Seus agendamentos, {'\n'}
          estão aqui.
        </S.Title>
        <S.SubTitle>Conforto, segurança e praticidade.</S.SubTitle>
      </S.Header>
      {isLoading ? (
        <C.Load />
      ) : (
        <S.Content>
          <S.Appointments>
            <S.AppointmentTitle>Agendamentos feitos</S.AppointmentTitle>
            <S.AppointmentQuantity>{cars.length}</S.AppointmentQuantity>
          </S.Appointments>
          <S.CarsList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item: { car, startDate, endDate } }) => (
              <S.CarWrapper>
                <C.CarCard data={car} />
                <S.CarFooter>
                  <S.CarFooterTitle>Período</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>{startDate}</S.CarFooterDate>
                    <S.ArrowIcon />
                    {/* <AntDesign name="arrowright" size={20} color={theme.colors.title} style={{marginHorizontal: 10}}/> */}
                    <S.CarFooterDate>{endDate}</S.CarFooterDate>
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
