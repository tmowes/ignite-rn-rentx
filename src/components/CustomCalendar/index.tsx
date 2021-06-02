import React from 'react'

import { Feather } from '@expo/vector-icons'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { useTheme } from 'styled-components'

import { calendarPTBRLocale } from '../../utils/calendarLocale'
import { CalendarProps } from './types'

LocaleConfig.locales['pt-br'] = { ...calendarPTBRLocale }
LocaleConfig.defaultLocale = 'pt-br'

export const CustomCalendar = (props: CalendarProps) => {
  const { markedDate, onDayPress } = props
  const { colors, fonts } = useTheme()
  return (
    <Calendar
      renderArrow={direction => (
        <Feather
          size={24}
          color={colors.text}
          name={direction === 'right' ? 'chevron-right' : 'chevron-left'}
        />
      )}
      headerStyle={{
        backgroundColor: colors.bgSecondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.textDetails,
        paddingBottom: 8,
        marginBottom: 8,
      }}
      theme={{
        textDayFontFamily: fonts.primary_400,
        textDayHeaderFontFamily: fonts.primary_500,
        textMonthFontFamily: fonts.secondary_600,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDate}
      onDayPress={onDayPress}
    />
  )
}
