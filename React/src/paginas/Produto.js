
const defaults = {
    id: 0,
    nome: '',
    desc: '',
    foto: {},
    categoria: '',
}
export default class Produto{

    constructor(obj){
        this.id = obj.id || defaults.id;
        this.nome = obj.nome || defaults.nome;
        this.desc = obj.desc || defaults.desc;
        this.foto = obj.foto || defaults.foto;
        this.categoria = obj.categoria || defaults.categoria;
    }

}