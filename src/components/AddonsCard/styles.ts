import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    width: 110px;
    height: 96px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.bgSecondary};
    padding: 12px;
    margin-bottom: 8px;
  `}
`

export const Name = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    flex: 1;
    font-family: ${fonts.primary_500};
    font-size: ${RFValue(14)}px;
    color: ${colors.text};
  `}
`
