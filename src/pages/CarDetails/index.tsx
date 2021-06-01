import React from 'react'

import SpeedIcon from '../../assets/speed.svg'
import AccelerationIcon from '../../assets/acceleration.svg'
import ForceIcon from '../../assets/force.svg'
import GasIcon from '../../assets/gasoline.svg'
import ExchangeIcon from '../../assets/exchange.svg'
import PeopleIcon from '../../assets/people.svg'
import * as C from '../../components'
import * as S from './styles'
import { carData } from '../../data/data'

export const CarDetails = () => {
  const { brand, model, rent, thumbnail } = carData[0]
  return (
    <S.Container>
      <S.Header>
        <C.IconButton onPress={() => true} />
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
        <S.About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na
          praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de
          acelerar.
        </S.About>
      </S.Content>
    </S.Container>
  )
}
