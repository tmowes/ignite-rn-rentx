import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

const { width: sWidth } = Dimensions.get('screen')

export const Container = styled.View`
  width: 100%;
`
export const DotsContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
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
