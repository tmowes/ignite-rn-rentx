import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    background-color: ${colors.shape};
    margin-bottom: 16px;
  `}
`
export const Details = styled.View``

export const Brand = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    font-size: ${RFValue(11)}px;
    color: ${colors.textDetails};
    text-transform: uppercase;
  `}
`
export const Model = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    color: ${colors.title};
  `}
`
export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`
export const Rent = styled.View`
  margin-right: 24px;
`
export const Period = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${colors.textDetails};
    text-transform: uppercase;
  `}
`
export const Price = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    color: ${colors.main};
    text-transform: uppercase;
  `}
`
export const Type = styled.View``

export const CarImage = styled.Image`
  width: 180px;
  height: 92px;
`
