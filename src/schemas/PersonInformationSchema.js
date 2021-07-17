
import * as Yup from "yup";

export const PersonInformationSchema = Yup.object({
    name: Yup.string().required().length(2).label("Primeiro nome"),
    birthday: Yup.string().required().label("Data de Aniversário"),
    cpf: Yup.string().required().label("Cpf")
});