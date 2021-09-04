import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

const numericMsg = "O campo deve ser um número."

export let pedidoSchema = object().shape(
    {
        id: number(),
        name: string().required(),
        desc: string().required(),
     
    }
)
