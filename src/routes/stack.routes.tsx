import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

export const StackRoutes = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={P.Home} />
    <Screen name="CarDetails" component={P.CarDetails} />
    <Screen name="Scheduling" component={P.Scheduling} />
    <Screen name="SchedulingDetails" component={P.SchedulingDetails} />
    <Screen name="SchedulingComplete" component={P.SchedulingComplete} />
  </Navigator>
)