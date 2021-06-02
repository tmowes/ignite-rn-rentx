import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import styled, { css, ThemeProvider } from 'styled-components/native'
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'

import * as themes from './styles/themes'
import { AppRoutes } from './routes'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.bgPrimary};
  `}
`

export const AppSrc = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={themes.dark}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <AppWrapper>
          <AppRoutes />
        </AppWrapper>
      </NavigationContainer>
    </ThemeProvider>
  )
}
