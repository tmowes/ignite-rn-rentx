import { DateCallbackHandler } from 'react-native-calendars'

export type MarkedDateProps = {
  [date: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disableTouchEvent?: boolean
  }
}
export type CalendarProps = {
  markedDate: MarkedDateProps
  onDayPress: DateCallbackHandler
}
