import { FlatList } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

import { Car } from '../../dtos'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.bgPrimary};
  `}
`

export const Header = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${colors.header};
    padding-top: 32px;
  `}
`
export const TotalCars = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(15)}px;
    color: ${colors.shape};
    font-family: ${fonts.primary_400};
  `}
`
export const Title = styled.Text`
  ${({ theme: { fonts } }) => css`
    font-size: 30px;
    font-family: ${fonts.secondary_600};
  `}
`

export const CarsList = styled(FlatList as new () => FlatList<Car>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: getBottomSpace() + 4,
  },
})``

export const MyRents = styled(RectButton)`
  ${({ theme: { colors } }) => css`
    height: 56px;
    width: 56px;
    position: absolute;
    bottom: 24px;
    right: 24px;
    border-radius: ${56 / 2}px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.main};
  `}
`

export const CarIcon = styled(Ionicons).attrs({})`
  ${({ theme: { colors } }) => css`
    color: ${colors.shape};
    font-size: 28px;
  `}
`
