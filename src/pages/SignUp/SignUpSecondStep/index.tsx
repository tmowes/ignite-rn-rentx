import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useDerivedValue } from 'react-native-reanimated'

import * as S from './styles'
import * as C from '../../../components'
import { SignUpSecondStepParams } from './types'
import { api } from '../../../services'

export const SignUpSecondStep = () => {
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const { user } = params as SignUpSecondStepParams
  const currIndex = useDerivedValue(() => 1)

  const { colors } = useTheme()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = async () => {
    if (!password || !confirmPassword) {
      return Alert.alert('Opa', 'Informe a senha e a confirmação')
    }
    if (password !== confirmPassword) {
      return Alert.alert('Opa', 'A senha e a confirmação não são iguais')
    }

    try {
      await api.post('/users', {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      })
      navigate('Confirmation', {
        nextScreen: 'SignIn',
        title: 'Conta Criada!',
        message: `Agora é só fazer login\ne aproveitar`,
      })
    } catch (error) {
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
            <S.Step>2. Senha</S.Step>
            <C.PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
            <C.PasswordInput
              iconName="lock"
              placeholder="Repetir Senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </S.Form>
          <S.Footer>
            <C.LabelButton
              label="Cadastrar"
              color={colors.success}
              onPress={handleRegister}
              enabled
              loading={false}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
