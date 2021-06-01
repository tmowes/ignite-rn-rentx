import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.bgPrimary};
  `}
`

export const Header = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 320px;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.bgSecondary};
  `}

  margin-top: ${getStatusBarHeight() + 18}px;
`

export const Title = styled.Text`
  ${({ theme: { fonts } }) => css`
    font-size: 30px;
    font-family: ${fonts.secondary_600};
  `}
`

export const Footer = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.bgSecondary};
    padding: 16px 24px ${getBottomSpace() + 24}px;
  `}
`
