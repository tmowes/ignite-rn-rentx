import React from 'react'

import { useAuth } from '../contexts'
import { AppTabRoutes } from './app.tab.routes'
import { AuthRoutes } from './auth.routes'

export const AppRoutes = () => {
  const { user } = useAuth()
  if (!user?.id) {
    return <AuthRoutes />
  }
  return <AppTabRoutes />
}
