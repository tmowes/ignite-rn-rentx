import React, { useEffect, useState } from 'react'

import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

import * as C from '../../components'
import Logo from '../../assets/logo.svg'
import * as S from './styles'
import { api } from '../../services'
import { Car } from '../../dtos'

export const Home = () => {
  const { navigate } = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [cars, setCars] = useState<Car[]>([])

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

  return (
    <S.Container>
      <S.Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <S.TotalCars>Total de {cars.length} carros</S.TotalCars>
      </S.Header>
      {isLoading ? (
        <C.Load />
      ) : (
        <S.CarsList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item: car }) => (
            <C.CarCard data={car} onPress={() => navigate('CarDetails', { car })} />
          )}
        />
      )}
      <S.MyRents onPress={() => navigate('SchedulesList')}>
        <S.CarIcon name="ios-car-sport" />
      </S.MyRents>
    </S.Container>
  )
}
