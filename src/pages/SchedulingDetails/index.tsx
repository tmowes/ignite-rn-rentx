import React from 'react'
import { StatusBar } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import SpeedIcon from '../../assets/speed.svg'
import AccelerationIcon from '../../assets/acceleration.svg'
import ForceIcon from '../../assets/force.svg'
import GasIcon from '../../assets/gasoline.svg'
import ExchangeIcon from '../../assets/exchange.svg'
import PeopleIcon from '../../assets/people.svg'
import * as C from '../../components'
import * as S from './styles'
import { carData } from '../../data/data'

export const SchedulingDetails = () => {
  const { brand, model, rent, thumbnail } = carData[0]
  const { navigate } = useNavigation()
  const { colors } = useTheme()
  return (
    <S.Container>
      <S.Header>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <C.IconButton />
      </S.Header>
      <S.SliderContainer>
        <C.ImageSlider thumbnails={[thumbnail]} />
      </S.SliderContainer>
      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{brand}</S.Brand>
            <S.Model>{model}</S.Model>
          </S.Description>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{`R$ ${rent.price}`}</S.Price>
          </S.Rent>
        </S.Details>
        <S.AddonsContainer>
          <C.AddonsCard name="380km/h" icon={SpeedIcon} />
          <C.AddonsCard name="3.2s" icon={AccelerationIcon} />
          <C.AddonsCard name="800 HP" icon={ForceIcon} />
          <C.AddonsCard name="Gasolina" icon={GasIcon} />
          <C.AddonsCard name="Auto" icon={ExchangeIcon} />
          <C.AddonsCard name="2 pessoas" icon={PeopleIcon} />
        </S.AddonsContainer>
        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </S.CalendarIcon>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>18/08/2021</S.DateValue>
          </S.DateInfo>
          <Feather name="chevron-right" size={RFValue(12)} color={colors.text} />
          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>18/08/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>R$ 580 x3 diarias</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ 1740.00</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>
      <S.Footer>
        <C.LabelButton
          label="Alugar agora"
          color={colors.success}
          onPress={() => navigate('SchedulingComplete')}
        />
      </S.Footer>
    </S.Container>
  )
}
