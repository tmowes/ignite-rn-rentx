import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

export const TabRoutes = () => (
  <Navigator headerMode="none">
    <Screen name="Scheduling" component={P.Scheduling} />
  </Navigator>
)
