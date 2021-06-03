import React, { useEffect, useState } from 'react'
import { BackHandler, StatusBar } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'

import * as C from '../../components'
import Logo from '../../assets/logo.svg'
import * as S from './styles'
import { api } from '../../services'
import { Car } from '../../dtos'
import { ContextProps } from './types'

export const Home = () => {
  const { navigate } = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [cars, setCars] = useState<Car[]>([])
  const positionX = useSharedValue(0)
  const positionY = useSharedValue(0)

  const animatedButton = useAnimatedStyle(() => ({
    transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
  }))

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: ContextProps) => {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive: (event, ctx: ContextProps) => {
      positionX.value = event.translationX + ctx.positionX
      positionY.value = event.translationY + ctx.positionY
    },
    onEnd: () => {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    },
  })

  const loadCars = async () => {
    try {
      const { data } = await api.get('cars')
      setCars(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadCars()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
  }, [])

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <S.Header>
        <Logo
          width={RFValue(108)}
          height={RFValue(12)}
          style={{ marginRight: 'auto' }}
        />
        {!isLoading && <S.TotalCars>Total de {cars.length} carros</S.TotalCars>}
      </S.Header>
      {isLoading ? (
        <C.LoadAnimation />
      ) : (
        <S.CarsList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item: car }) => (
            <C.CarCard data={car} onPress={() => navigate('CarDetails', { car })} />
          )}
        />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <S.MyRents style={animatedButton}>
          <S.MyRentsButton onPress={() => navigate('SchedulesList')}>
            <S.CarIcon name="ios-car-sport" />
          </S.MyRentsButton>
        </S.MyRents>
      </PanGestureHandler>
    </S.Container>
  )
}
