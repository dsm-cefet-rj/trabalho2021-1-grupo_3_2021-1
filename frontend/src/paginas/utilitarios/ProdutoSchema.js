import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let produtoSchema = object().shape(
    {
        id: string(),
        idUser: string(),
        name: string().required(),
        desc: string().required(),
        categoria: string(),
        local: string().required(),
        preco: number().required(),
        num: number().required(),
        img: string().max(200).required(),
     
    }
)
