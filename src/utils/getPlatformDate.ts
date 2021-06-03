import { Platform } from 'react-native'

import addDays from 'date-fns/addDays'

export const getPlatformDate = (date: Date) => {
  if (Platform.OS === 'ios') {
    return addDays(date, 1)
  }
  return date
}
