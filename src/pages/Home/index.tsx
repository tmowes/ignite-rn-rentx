import React from 'react'

import { RFValue } from 'react-native-responsive-fontsize'

import { carData } from '../../data/data'
import * as C from '../../components'
import Logo from '../../assets/logo.svg'
import * as S from './styles'

export const Home = () => (
  <S.Container>
    <S.Header>
      <Logo width={RFValue(108)} height={RFValue(12)} />
      <S.TotalCars>Total de 12 carros</S.TotalCars>
    </S.Header>

    <S.CarsList
      data={carData}
      keyExtractor={(item, i) => `${item.thumbnail}${i}`}
      renderItem={({ item }) => <C.CarCard data={item} />}
    />
  </S.Container>
)
