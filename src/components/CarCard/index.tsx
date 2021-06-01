import React from 'react'

import GasIcon from '../../assets/gasoline.svg'
import * as S from './styles'
import { CarCardProps } from './types'

export const CarCard = ({ data }: CarCardProps) => {
  const { brand, model, thumbnail, rent } = data
  return (
    <S.Container>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Model>{model}</S.Model>
        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{`R$ ${rent.price}`}</S.Price>
          </S.Rent>
          <S.Type>
            <GasIcon />
          </S.Type>
        </S.About>
      </S.Details>
      <S.CarImage source={{ uri: thumbnail }} resizeMode="contain" />
    </S.Container>
  )
}
