import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
  password: Yup.string().required('A senha é obrigatória'),
  email: Yup.string()
    .required('O e-mail é obrigatório')
    .email('Digite um e-mail válido'),
})
