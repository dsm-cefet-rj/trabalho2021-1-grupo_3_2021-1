const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const pedidoSchema = new Schema({
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
   
    num: {
        type: String,
        required: true,
    },
    idUser: {
        type: String,
        required: false,
    }



})

pedidoSchema.plugin(normalize);

var Pedidos = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedidos;