import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let usuarioSchema = object().shape(
    {
        id: string(),
        name: string().required(),
        password: string().required(),
     
    }
)
