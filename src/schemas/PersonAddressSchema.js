import * as Yup from 'yup'
export const PersonAddressSchema = Yup.object({
  cep: Yup
    .string()
    .required('Campo obrigatório')
    .length(8, 'O campo cep deve ter 8 caracteres'),
  neighborhood: Yup
    .string()
    .required('Campo obrigatório'),
  city: Yup
    .string()
    .required('Campo obrigatório')
})
