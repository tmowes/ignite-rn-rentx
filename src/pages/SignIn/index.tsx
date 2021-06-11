import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native'

import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import * as S from './styles'
import * as C from '../../components'
import { signInSchema } from '../../utils'
import { useAuth } from '../../contexts'

export const SignIn = () => {
  const { signIn } = useAuth()
  const { navigate } = useNavigation()
  const { colors } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    try {
      await signInSchema.validate({ email, password })
      signIn({ email, password })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa', error.message)
      }
      return Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, verifique as credenciais'
      )
    }
  }

  return (
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <S.Header>
            <S.Title>
              Estamos{'\n'}
              quase lá.
            </S.Title>
            <S.SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </S.SubTitle>
          </S.Header>

          <S.Form>
            <C.IconInput
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <C.PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </S.Form>
          <S.Footer>
            <C.LabelButton
              label="Login"
              onPress={handleSignIn}
              enabled
              loading={false}
            />
            <C.LabelButton
              label="Criar conta gratuita"
              color={colors.bgSecondary}
              onPress={() => navigate('SignUpFirstStep')}
              enabled
              loading={false}
              light
              addStyle={{ marginTop: 8 }}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
