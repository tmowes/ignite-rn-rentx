import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.header};
    position: relative;
  `}
`
export const AnimatedBrand = styled(Animated.View)`
  position: absolute;
`

export const AnimatedLogo = styled(Animated.View)`
  position: absolute;
`
