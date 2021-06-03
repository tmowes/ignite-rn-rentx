import format from 'date-fns/format'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import { DateObject } from 'react-native-calendars'

import { MarkedDateProps } from '../components/CustomCalendar/types'
import { getPlatformDate } from './getPlatformDate'
import { dark } from '../styles/themes'

export const generateInterval = (start: DateObject, end: DateObject) => {
  const interval: MarkedDateProps = {}
  const eachDayInterval = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  })
  eachDayInterval.map(item => {
    const date = format(getPlatformDate(item), 'yyyy-MM-dd')
    return Object.assign(interval, {
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? dark.colors.main
            : dark.colors.mainClear,
        textColor:
          start.dateString === date || end.dateString === date
            ? dark.colors.mainClear
            : dark.colors.main,
      },
    })
  })
  return interval
}
