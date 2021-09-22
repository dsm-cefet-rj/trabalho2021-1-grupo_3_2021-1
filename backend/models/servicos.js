const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const servicoSchema = new Schema({
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
        type: Number,
        required: true,
    },
    num: {
        type: Number,
        required: true,
    }
})

servicoSchema.plugin(normalize);

var Servicos = mongoose.model('Servico', servicoSchema);

module.exports = Servicos;