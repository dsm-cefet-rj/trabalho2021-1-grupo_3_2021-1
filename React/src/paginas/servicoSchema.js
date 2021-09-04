import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

const numericMsg = "O campo deve ser um número."

export let servicoSchema = object().shape(
    {
        id: number(),
        nome: string().required(),
        desc: string().required(),
     
    }
)
