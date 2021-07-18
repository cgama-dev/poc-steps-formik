
import * as Yup from "yup";
export const PersonInformationSchema = Yup.object({
    name: Yup
            .string()
            .required("Campo é obrigatório")
            .min(4, 'O nome deve ter mais de 4 caracteres')
            .max(50, 'O nome deve ter no máximo 50 caracteres'),
    birthday: Yup
            .string()
            .required("Campo é obrigatório"),
    cpf: Yup
            .string()
            .required("Campo obrigatório")
            .label("Cpf")
});