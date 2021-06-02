import React from 'react'
import { StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import * as C from '../../components'
import * as S from './styles'
import { RouteParams } from './types'
import { getAccessoryIcon } from '../../utils'

export const CarDetails = () => {
  const { navigate } = useNavigation()
  const { params } = useRoute()

  const { car } = params as RouteParams

  return (
    <S.Container>
      <S.Header>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <C.IconButton />
      </S.Header>
      <S.SliderContainer>
        <C.ImageSlider thumbnails={car.photos} />
      </S.SliderContainer>
      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Model>{car.model}</S.Model>
          </S.Description>
          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>{`R$ ${car.rent.price}`}</S.Price>
          </S.Rent>
        </S.Details>
        <S.AddonsContainer>
          {car.accessories.map(({ name, type }) => (
            <C.AddonsCard key={type} name={name} icon={getAccessoryIcon(type)} />
          ))}
        </S.AddonsContainer>
        <S.About>{car.about}</S.About>
      </S.Content>
      <S.Footer>
        <C.LabelButton
          label="Escolher período do aluguel"
          onPress={() => navigate('Scheduling')}
        />
      </S.Footer>
    </S.Container>
  )
}
