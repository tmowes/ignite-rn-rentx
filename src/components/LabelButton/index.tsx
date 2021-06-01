import React from 'react'

import { useTheme } from 'styled-components'

import * as S from './styles'
import { LabelButtonProps } from './types'

export const LabelButton = (props: LabelButtonProps) => {
  const { label, color, ...attrs } = props
  const { colors } = useTheme()
  return (
    <S.Container {...attrs} color={color || colors.main}>
      <S.Title>{label}</S.Title>
    </S.Container>
  )
}
