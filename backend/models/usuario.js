const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const usuariochema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    duracao: {
        type: Number,
        required: true,
    }
})

usuariochema.plugin(normalize);

var usuario = mongoose.model('Atividade', usuariochema);

module.exports = usuario;
