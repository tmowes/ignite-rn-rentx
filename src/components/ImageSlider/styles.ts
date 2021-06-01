import { Dimensions } from 'react-native'

import styled, { css } from 'styled-components/native'

import { DotIndexProps } from './types'

const { width: sWidth } = Dimensions.get('screen')

export const Container = styled.View`
  width: 100%;
`
export const DotsContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`
export const DotIndex = styled.View<DotIndexProps>`
  ${({ theme: { colors }, active }) => css`
    width: 6px;
    height: 6px;
    margin-left: 3px;
    background-color: ${colors.shape};
    border-radius: 3px;
    ${active &&
    css`
      background-color: ${colors.shapeSec};
    `}
  `}
`
export const CarImageContainer = styled.View`
  width: ${sWidth}px;
  height: 140px;
  align-items: center;
  justify-content: center;
`
export const CarImage = styled.Image`
  width: 280px;
  height: 140px;
`
