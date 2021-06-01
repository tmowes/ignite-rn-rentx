import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

import { StyledProps } from './types'

// eslint-disable-next-line prettier/prettier
export const Container = styled(RectButton) <StyledProps>`
  ${({ color }) => css`
    width: 100%;
    padding: 16px;
    align-items: center;
    justify-content: center;
    background-color: ${color};
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.primary_500};
    font-size: ${RFValue(16)}px;
    color: ${colors.shape};
  `}
`
