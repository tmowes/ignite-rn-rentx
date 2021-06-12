import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
// import { useNetInfo } from '@react-native-community/netinfo'
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { synchronize } from '@nozbe/watermelondb/sync'
import { PanGestureHandler } from 'react-native-gesture-handler'

import { database, ModelCar } from '../../databases'
import * as C from '../../components'
import Logo from '../../assets/logo.svg'
import * as S from './styles'
import { api } from '../../services'
import { ContextProps } from './types'

export const Home = () => {
  const { navigate } = useNavigation()
  // const { isConnected } = useNetInfo()
  const [isLoading, setIsLoading] = useState(true)

  const [cars, setCars] = useState<ModelCar[]>([])
  const positionX = useSharedValue(0)
  const positionY = useSharedValue(0)

  const animatedButton = useAnimatedStyle(() => ({
    transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
  }))

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: ContextProps) => {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive: (event, ctx: ContextProps) => {
      positionX.value = event.translationX + ctx.positionX
      positionY.value = event.translationY + ctx.positionY
    },
    onEnd: () => {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    },
  })

  const offlineSynchronize = async () => {
    console.log('offlineSynchronize')

    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api.get(
          `cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`
        )
        const { changes, latestVersion } = response.data

        console.log('LOAD DATA FROM BACKEND TO APP')
        console.log(JSON.stringify(changes))

        return { changes, timestamp: latestVersion }
      },
      pushChanges: async ({ changes }) => {
        console.log('SEND DATA FROM APP TO BACKEND')
        console.log(JSON.stringify(changes))
      },
    })
  }

  useEffect(() => {
    let isMonted = true
    const loadCarsData = async () => {
      try {
        // const carCollection = database.get<ModelCar>('cars')
        // const loadedCars = await carCollection.query().fetch()
        const { data } = await api.get('cars')
        // if (isMonted && data.length > 0) {
        if (isMonted) {
          setCars(data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        if (isMonted) {
          setIsLoading(false)
        }
      }
    }
    loadCarsData()
    return () => {
      isMonted = false
    }
  }, [])

  // useEffect(() => {
  //   console.log('isConnectedCheck', isConnected)
  //   if (isConnected === true) {
  //     offlineSynchronize()
  //   }
  // }, [isConnected])

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <S.Header>
        <Logo
          width={RFValue(108)}
          height={RFValue(12)}
          style={{ marginRight: 'auto' }}
        />
        {!isLoading && <S.TotalCars>Total de {cars.length} carros</S.TotalCars>}
      </S.Header>
      <C.LabelButton label="Sincronizar" onPress={offlineSynchronize} />
      {isLoading ? (
        <C.LoadAnimation />
      ) : (
        <S.CarsList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item: car }) => (
            <C.CarCard data={car} onPress={() => navigate('CarDetails', { car })} />
          )}
        />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <S.MyRents style={animatedButton}>
          <S.MyRentsButton onPress={() => navigate('SchedulesList')}>
            <S.CarIcon name="ios-car-sport" />
          </S.MyRentsButton>
        </S.MyRents>
      </PanGestureHandler>
    </S.Container>
  )
}
