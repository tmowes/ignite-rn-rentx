import React from 'react'

import FastImage from 'react-native-fast-image'
import { useNetInfo } from '@react-native-community/netinfo'

import { getAccessoryIcon } from '../../utils'
import * as S from './styles'
import { CarCardProps } from './types'

export const CarCard = ({ data, ...attrs }: CarCardProps) => {
  const { brand, name, thumbnail, fuel_type, period, price } = data
  const { isConnected } = useNetInfo()

  const MotorIcon = getAccessoryIcon(fuel_type)
  return (
    <S.Container {...attrs}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Model>{name}</S.Model>
        <S.About>
          <S.Rent>
            <S.Period>{period}</S.Period>
            <S.Price>{`R$ ${isConnected === true ? price : '...'}`}</S.Price>
          </S.Rent>
          <S.Type>
            <MotorIcon />
          </S.Type>
        </S.About>
      </S.Details>
      <S.CarImage
        source={{ uri: thumbnail }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </S.Container>
  )
}
