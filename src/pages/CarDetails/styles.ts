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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
`
export const SliderContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const Title = styled.Text`
  ${({ theme: { fonts } }) => css`
    font-size: 30px;
    font-family: ${fonts.secondary_600};
  `}
`

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24, alignItems: 'center' },
})``

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 36px;
`

export const Description = styled.View``

export const Brand = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    font-size: ${RFValue(12)}px;
    color: ${colors.textDetails};
    text-transform: uppercase;
  `}
`
export const Model = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    font-size: ${RFValue(22)}px;
    color: ${colors.title};
  `}
`

export const Rent = styled.View``

export const Period = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    font-size: ${RFValue(11)}px;
    color: ${colors.textDetails};
    text-transform: uppercase;
  `}
`
export const Price = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    font-size: ${RFValue(22)}px;
    color: ${colors.main};
    text-transform: uppercase;
  `}
`
export const About = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.primary_400};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;
    color: ${colors.text};
    text-align: justify;
    margin-top: 24px;
  `}
`

export const AddonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`

export const Footer = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.bgSecondary};
    padding: 16px 24px ${getBottomSpace() + 24}px;
  `}
`
