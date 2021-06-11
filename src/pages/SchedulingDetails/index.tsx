import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Alert, StatusBar } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useNavigation, useRoute } from '@react-navigation/native'
import format from 'date-fns/format'

import * as C from '../../components'
import * as S from './styles'
import { RentalPeriod, RouteParams } from './types'
import { getAccessoryIcon, getPlatformDate } from '../../utils'
import { api } from '../../services'

export const SchedulingDetails = () => {
  const { navigate } = useNavigation()
  const { colors } = useTheme()
  const { params } = useRoute()

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const [isLoading, setIsLoading] = useState(false)

  const { car, dates } = params as RouteParams

  const getRentalPeriod = useCallback(() => {
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endFormatted: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        'dd/MM/yyyy'
      ),
    })
  }, [dates])

  const rentTotal = useMemo(() => {
    const days = Number(dates.length)
    const total = Number(days * car.price)
    return { days, total }
  }, [car.price, dates.length])

  const confirmRentalData = async () => {
    setIsLoading(true)
    const schedulesByCar = await api.get(`schedules_bycars/${car.id}`)
    const unavailable_dates = [...schedulesByCar.data.unavailable_dates, ...dates]

    try {
      await api.post('schedules_byuser', {
        user_id: 1,
        car,
        startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
        endDate: format(
          getPlatformDate(new Date(dates[dates.length - 1])),
          'dd/MM/yyyy'
        ),
      })

      await api.put(`schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      navigate('Confirmation', {
        nextScreen: 'SchedulesList',
        title: 'Carro alugado!',
        message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`,
      })
    } catch (error) {
      Alert.alert('Não foi possivel cadastrar seu agendamento')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getRentalPeriod()
  }, [getRentalPeriod])

  return (
    <S.Container>
      <S.Header>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <C.IconButton />
      </S.Header>
      <S.SliderContainer>
        <C.ImageSliderSnap thumbnails={car.photos} />
      </S.SliderContainer>
      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Model>{car.name}</S.Model>
          </S.Description>
          <S.Rent>
            <S.Period>{car.period}</S.Period>
            <S.Price>{`R$ ${car.price}`}</S.Price>
          </S.Rent>
        </S.Details>
        <S.AddonsContainer>
          {car.accessories.map(({ name, type }) => (
            <C.AddonsCard key={type} name={name} icon={getAccessoryIcon(type)} />
          ))}
        </S.AddonsContainer>
        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </S.CalendarIcon>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>{rentalPeriod.startFormatted}</S.DateValue>
          </S.DateInfo>
          <Feather name="chevron-right" size={RFValue(12)} color={colors.text} />
          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>{rentalPeriod.endFormatted}</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>{`R$ ${car.price} x${rentTotal.days} diarias`}</S.RentalPriceQuota>
            <S.RentalPriceTotal>{`R$ ${rentTotal.total}`}</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>
      <S.Footer>
        <C.LabelButton
          label="Alugar agora"
          color={colors.success}
          loading={isLoading}
          enabled={!isLoading}
          onPress={confirmRentalData}
        />
      </S.Footer>
    </S.Container>
  )
}
