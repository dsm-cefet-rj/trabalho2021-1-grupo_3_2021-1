import {string, object, number, setLocale, bool} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

const numericMsg = "O campo deve ser um número."

export let servicoSchema = object().shape(
    {
        id: number(),
        name: string().required(),
        desc: string().required(),
        local: string().required(),
        preco: number().required(),
        num: number().required(),
     
    }
)
