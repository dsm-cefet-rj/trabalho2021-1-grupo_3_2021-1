const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const produtoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },

    local: {
        type: String,
        required: true,
    },
    preco: {
        type: String,
        required: true,
    },
    num: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    idUser: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: true,
    }



})

produtoSchema.plugin(normalize);

var Produtos = mongoose.model('Produto', produtoSchema);

module.exports = Produtos;