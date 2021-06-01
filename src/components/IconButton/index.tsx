import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import * as S from './styles'
import { IconButtonProps } from './types'

export const IconButton = (props: IconButtonProps) => {
  const { name = 'chevron-left', color, ...attrs } = props
  const { colors } = useTheme()
  return (
    <S.Container {...attrs}>
      <MaterialIcons name={name} color={color || colors.text} size={28} />
    </S.Container>
  )
}
