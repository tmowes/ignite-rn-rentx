import React from 'react'

import { getAccessoryIcon } from '../../utils'
import * as S from './styles'
import { CarCardProps } from './types'

export const CarCard = ({ data, ...attrs }: CarCardProps) => {
  const { brand, model, thumbnail, fuel_type, rent } = data
  const MotorIcon = getAccessoryIcon(fuel_type)
  return (
    <S.Container {...attrs}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Model>{model}</S.Model>
        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{`R$ ${rent.price}`}</S.Price>
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
