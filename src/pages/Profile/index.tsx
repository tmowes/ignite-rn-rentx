import React, { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import { useAuth } from '../../contexts'
import * as C from '../../components'
import * as S from './styles'

export const Profile = () => {
  const { colors } = useTheme()
  const { user } = useAuth()
  const { navigate } = useNavigation()
  const [name, setName] = useState('')
  const [driverLicense, setDriverLicense] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignOut = () => {
    console.log('des logar')
  }

  return (
    <KeyboardAvoidingView
      enabled
      behavior="position"
      keyboardVerticalOffset={useBottomTabBarHeight() - 16}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            <S.TopHeader>
              <C.IconButton />
              <S.Title>Editar Perfil</S.Title>
              <C.IconButton onPress={handleSignOut} name="power" />
            </S.TopHeader>
            <S.AvatarContainer>
              <S.Avatar source={{ uri: 'https://github.com/tmowes.png' }} />
              <S.AvatarButton>
                <S.AvatarIcon name="camera" />
              </S.AvatarButton>
            </S.AvatarContainer>
          </S.Header>
          <S.Content>
            <S.ContentTabs>
              <S.TabItem active>
                <S.TabTitle active>Dados</S.TabTitle>
              </S.TabItem>
              <S.TabItem active={false}>
                <S.TabTitle active={false}>Trocar senha</S.TabTitle>
              </S.TabItem>
            </S.ContentTabs>
            <S.Form>
              <C.IconInput
                iconName="user"
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="words"
                defaultValue={user.name}
                value={name}
                onChangeText={setName}
              />
              <C.IconInput iconName="mail" defaultValue={user.email} editable={false} />
              <C.IconInput
                iconName="credit-card"
                placeholder="CNH"
                autoCorrect={false}
                keyboardType="numeric"
                defaultValue={user.driver_license}
                value={driverLicense}
                onChangeText={setDriverLicense}
              />
            </S.Form>
            <S.Form>
              <C.PasswordInput
                iconName="lock"
                placeholder="Senha atual"
                value={password}
                onChangeText={setPassword}
              />
              <C.PasswordInput
                iconName="lock"
                placeholder="Senha nova"
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <C.PasswordInput
                iconName="lock"
                placeholder="Repetir Senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </S.Form>
          </S.Content>
          <S.Footer>
            <C.LabelButton label="Salvar alterações" onPress={() => true} />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
