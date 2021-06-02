import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

import { StyledDateProps } from './types'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.bgSecondary};
  `}
`

export const Header = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    justify-content: center;
    background-color: ${colors.header};
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 16}px;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_600};
    font-size: ${RFValue(28)}px;
    color: ${colors.bgSecondary};
    margin: 32px 0;
  `}
`

export const RentPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const DateInfo = styled.View`
  width: 30%;
`

export const DateTitle = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    color: ${colors.text};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `}
`

export const DateValue = styled.Text<StyledDateProps>`
  ${({ theme: { colors, fonts }, selected }) => css`
    font-family: ${fonts.primary_500};
    color: ${colors.shape};
    font-size: ${RFValue(14)}px;
    padding-bottom: 2px;

    ${!selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${colors.text};
    `}
  `}
`

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})``

export const Footer = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.bgSecondary};
    padding: 16px 24px ${getBottomSpace() + 24}px;
  `}
`
