import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
  driverLicense: Yup.string().required('A CNh é obrigatória'),
  email: Yup.string()
    .required('O e-mail é obrigatório')
    .email('Digite um e-mail válido'),
  name: Yup.string().required('O nome é obrigatório'),
})
