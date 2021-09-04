import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

const numericMsg = "O campo deve ser um número."

export let produtoSchema = object().shape(
    {
        id: number(),
        nome: string().required(),
        foto: string(),
        desc: string().required(),
        categoria: string(),
     
    }
)
