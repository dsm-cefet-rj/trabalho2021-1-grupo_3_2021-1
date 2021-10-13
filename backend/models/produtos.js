const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const produtoSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    sigla: {
        type: String,
        required: true,
    }



})

produtoSchema.plugin(normalize);

var Produtos = mongoose.model('Produto', produtoSchema);

module.exports = Produtos;