
export default function Produto(obj){
    return {

        id: obj.id || 0,
        nome: obj.nome || "",
        desc: obj.desc || "",
        foto: obj.foto || "",
        categoria: obj.categoria || ""
    }

}