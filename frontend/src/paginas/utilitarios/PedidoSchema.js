import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let pedidoSchema = object().shape(
    {
        id: string(),
        idUser: string(),
        name: string().required(),
        desc: string().required(),
        local: string().required(),
        num: number().required(),
        img: string(200).required(),
     
    }
)
