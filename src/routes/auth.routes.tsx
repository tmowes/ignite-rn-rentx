import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'
import { AppTabRoutes } from './app.tab.routes'

const { Navigator, Screen } = createStackNavigator()

export const AuthRoutes = () => (
  <Navigator headerMode="none" initialRouteName="Splash">
    <Screen name="Splash" component={P.Splash} />
    <Screen name="SignIn" component={P.SignIn} />
    <Screen name="SignUpFirstStep" component={P.SignUpFirstStep} />
    <Screen name="SignUpSecondStep" component={P.SignUpSecondStep} />
    <Screen name="AppTabRoutes" component={AppTabRoutes} />
    <Screen name="Confirmation" component={P.Confirmation} />
  </Navigator>
)
