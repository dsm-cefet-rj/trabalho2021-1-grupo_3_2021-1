import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';


setLocale(ptForm)

const numMsg = "Números por favor."

const strMsg = "Limite atingido"

export let produtoSchema = object().shape(
    {
        id: number(),
        name: string().required().max(30),
        desc: string().required().max(100)

    }
)