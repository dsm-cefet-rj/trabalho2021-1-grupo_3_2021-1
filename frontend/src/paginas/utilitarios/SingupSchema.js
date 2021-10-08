import { string, object, setLocale, ref } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);
const numericMsg = "O campo deve ser um número.";
const menorQueUnTotais = "O campo deve ser menor ou igual a unidades totais";

export let userRegisterSchema = object().shape({
  userName: string().required(),
  password: string().min(6).max(9).required(),
  confirmPassword: string().oneOf([ref("password"), null])
});