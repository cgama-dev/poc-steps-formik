import * as Yup from 'yup';

export const PersonAuthSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Senha")
});