import React from 'react'

import { getAccessoryIcon } from '../../utils'
import * as S from './styles'
import { CarCardProps } from './types'

export const CarCard = ({ data, ...attrs }: CarCardProps) => {
  const { brand, name, thumbnail, fuel_type, period, price } = data
  const MotorIcon = getAccessoryIcon(fuel_type)
  return (
    <S.Container {...attrs}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Model>{name}</S.Model>
        <S.About>
          <S.Rent>
            <S.Period>{period}</S.Period>
            <S.Price>{`R$ ${price}`}</S.Price>
          </S.Rent>
          <S.Type>
            <MotorIcon />
          </S.Type>
        </S.About>
      </S.Details>
      <S.CarImage source={{ uri: thumbnail }} resizeMode="contain" />
    </S.Container>
  )
}
