import * as Yup from 'yup'

export const PersonAuthSchema = Yup.object({
  email: Yup
    .string()
    .required('Campo obrigatório')
    .email('Informe um email válido'),
  password: Yup
    .string()
    .required('Campo obrigatório'),
  passwordConfirmation: Yup
    .string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('password'), null], 'As senhas devem corresponder')
})
