import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native'

import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useDerivedValue } from 'react-native-reanimated'

import * as S from './styles'
import * as C from '../../../components'
import { signUpSchema } from '../../../utils'

export const SignUpFirstStep = () => {
  const { navigate } = useNavigation()
  const currIndex = useDerivedValue(() => 0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [driverLicense, setDriverLicense] = useState('')

  const handleNextStep = async () => {
    try {
      const data = { name, email, driverLicense }
      await signUpSchema.validate(data)
      navigate('SignUpSecondStep', { user: data })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa', error.message)
      }
      return Alert.alert('Erro no cadastro', 'Ocorreu um erro ao fazer cadastro')
    }
  }

  return (
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <S.Header>
            <S.TopHeader>
              <C.IconButton />
              <S.Steps>
                {new Array(2).fill(0).map((_, i) => (
                  <C.BulletsDots key={String(i)} index={i} currIndex={currIndex} />
                ))}
              </S.Steps>
            </S.TopHeader>
            <S.Title>
              Crie sua{'\n'}
              conta
            </S.Title>
            <S.SubTitle>
              Faça seu cadastro de{'\n'}
              forma rápida e fácil.
            </S.SubTitle>
          </S.Header>

          <S.Form>
            <S.Step>1. Dados</S.Step>
            <C.IconInput
              iconName="user"
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="words"
              value={name}
              onChangeText={setName}
            />
            <C.IconInput
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <C.IconInput
              iconName="credit-card"
              placeholder="CNH"
              autoCorrect={false}
              keyboardType="numeric"
              value={driverLicense}
              onChangeText={setDriverLicense}
            />
          </S.Form>
          <S.Footer>
            <C.LabelButton
              label="Próximo"
              onPress={handleNextStep}
              enabled
              loading={false}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
