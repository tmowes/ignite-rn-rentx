import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { useNetInfo } from '@react-native-community/netinfo'

import * as C from '../../components'
import * as S from './styles'
import { RouteParams } from './types'
import { getAccessoryIcon } from '../../utils'
import { Car, Photo } from '../../dtos'
import { api } from '../../services'

export const CarDetails = () => {
  const { isConnected } = useNetInfo()
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const { car } = params as RouteParams
  const [onlineCar, setOnlineCar] = useState({} as Car)
  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const animatedHeader = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 192], [192, 64], Extrapolate.CLAMP),
  }))
  const animatedCarImg = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 128], [1, 0]),
  }))

  const checkedPhotos = onlineCar.photos
    ? onlineCar.photos
    : ([{ id: car.thumbnail, photo: car.thumbnail }] as Photo[])

  useEffect(() => {
    const loadOnlineCar = async () => {
      const { data } = await api.get<Car>(`cars/${car.id}`)
      setOnlineCar(data)
    }
    if (isConnected === true) {
      loadOnlineCar()
    }
  }, [car, isConnected])

  return (
    <S.Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <S.AnimatedHeader style={animatedHeader}>
        <S.Header>
          <C.IconButton />
        </S.Header>
        <S.SliderContainer style={animatedCarImg}>
          <C.ImageSliderSnap thumbnails={checkedPhotos} />
        </S.SliderContainer>
      </S.AnimatedHeader>
      <S.Content onScroll={scrollHandler}>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Model>{car.name}</S.Model>
          </S.Description>
          <S.Rent>
            <S.Period>{car.period}</S.Period>
            <S.Price>{`R$ ${isConnected === true ? car.price : '...'}`}</S.Price>
          </S.Rent>
        </S.Details>
        {onlineCar.accessories && (
          <S.AddonsContainer>
            {onlineCar.accessories.map(({ name, type }) => (
              <C.AddonsCard key={type} name={name} icon={getAccessoryIcon(type)} />
            ))}
          </S.AddonsContainer>
        )}
        <S.About>{car.about}</S.About>
        <S.About>{car.about}</S.About>
        <S.About>{car.about}</S.About>
        <S.About>{car.about}</S.About>
        <S.About>{car.about}</S.About>
      </S.Content>
      <S.Footer>
        <C.LabelButton
          label="Escolher período do aluguel"
          enabled={isConnected === true}
          onPress={() => navigate('Scheduling', { car })}
        />
        {isConnected === false && (
          <S.OffLineMsg>
            💬 você precisar estar conectado{`\n`}
            para ver mais detalhes e agendar seu carro.
          </S.OffLineMsg>
        )}
      </S.Footer>
    </S.Container>
  )
}
