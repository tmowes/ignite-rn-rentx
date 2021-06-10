import React, { useState } from 'react'

import * as S from './styles'
import { PasswordInputProps } from './types'

export const PasswordInput = (props: PasswordInputProps) => {
  const { iconName, value, ...attrs } = props
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputFocus = () => {
    setIsFocused(true)
  }
  const inputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <S.Container isFocused={isFocused}>
      <S.IconContainer>
        <S.Icon name={iconName} isFocused={isFocused} isFilled={isFilled} />
      </S.IconContainer>
      <S.InputText
        onFocus={inputFocus}
        onBlur={inputBlur}
        secureTextEntry={isPasswordVisible}
        {...attrs}
      />
      <S.ChangeVisibility onPress={() => setIsPasswordVisible(prev => !prev)}>
        <S.IconContainer>
          <S.EyeIcon name={isPasswordVisible ? 'eye' : 'eye-off'} />
        </S.IconContainer>
      </S.ChangeVisibility>
    </S.Container>
  )
}
