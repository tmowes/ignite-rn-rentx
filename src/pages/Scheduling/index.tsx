import React from 'react'

import * as C from '../../components'
import * as S from './styles'
import { carData } from '../../data/data'

export const Scheduling = () => {
  const { brand, model, rent, thumbnail } = carData[0]
  return (
    <S.Container>
      <S.Header>
        <C.IconButton onPress={() => true} />
        <S.Title>Escolha uma data de inicio e fim do aluguel</S.Title>
      </S.Header>
      <S.Footer>
        <C.LabelButton label="hi" />
      </S.Footer>
    </S.Container>
  )
}
