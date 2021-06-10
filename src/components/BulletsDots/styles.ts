import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

export const Dot = styled(Animated.View)`
  ${({ theme: { colors } }) => css`
    width: 6px;
    height: 6px;
    margin-left: 3px;
    background-color: ${colors.shapeSec};
    border-radius: 3px;
  `}
`
