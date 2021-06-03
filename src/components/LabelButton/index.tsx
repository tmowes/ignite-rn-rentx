import React from 'react'
import { ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components'

import * as S from './styles'
import { LabelButtonProps } from './types'

export const LabelButton = (props: LabelButtonProps) => {
  const { label, color, enabled = true, loading = false, ...attrs } = props
  const { colors } = useTheme()
  return (
    <S.Container
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
      color={color || colors.main}
      {...attrs}
    >
      {loading ? (
        <ActivityIndicator color={colors.shape} size="small" />
      ) : (
        <S.Title>{label}</S.Title>
      )}
    </S.Container>
  )
}
