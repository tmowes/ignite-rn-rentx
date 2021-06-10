import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

export const StackRoutes = () => (
  <Navigator headerMode="none" initialRouteName="SignIn">
    <Screen name="Splash" component={P.Splash} />
    <Screen name="SignIn" component={P.SignIn} />
    <Screen name="SignUpFirstStep" component={P.SignUpFirstStep} />
    <Screen name="SignUpSecondStep" component={P.SignUpSecondStep} />
    <Screen name="Home" component={P.Home} options={{ gestureEnabled: false }} />
    <Screen name="CarDetails" component={P.CarDetails} />
    <Screen name="Scheduling" component={P.Scheduling} />
    <Screen name="SchedulingDetails" component={P.SchedulingDetails} />
    <Screen name="Confirmation" component={P.Confirmation} />
    <Screen name="SchedulesList" component={P.SchedulesList} />
  </Navigator>
)
