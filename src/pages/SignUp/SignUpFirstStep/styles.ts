import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    padding: 0 24px;
    background-color: ${colors.bgPrimary};
  `}
`
export const Header = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    background-color: ${colors.bgPrimary};
    margin-top: ${getStatusBarHeight() + 24}px;
  `}
`

export const TopHeader = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Steps = styled.View`
  flex-direction: row;
  padding-right: 24px;
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(36)}px;
    font-family: ${fonts.secondary_600};
    color: ${colors.title};
    margin-top: 48px;
  `}
`
export const SubTitle = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;
    font-family: ${fonts.primary_400};
    color: ${colors.text};
    margin-top: 16px;
  `}
`

export const Form = styled.View`
  width: 100%;
  margin: 48px 0 16px;
`

export const Step = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(22)}px;
    font-family: ${fonts.secondary_600};
    color: ${colors.title};
    margin-bottom: 16px;
  `}
`

export const Footer = styled.View`
  width: 100%;
`
