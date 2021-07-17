import * as Yup from 'yup';

export const PersonAddressSchema = Yup.object({
    cep: Yup.string().required().length(2).label("Cep"),
    neighborhood: Yup.string().required().label("Cidade"),
    city: Yup.string().required().label("City")
});