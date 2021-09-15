import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

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
