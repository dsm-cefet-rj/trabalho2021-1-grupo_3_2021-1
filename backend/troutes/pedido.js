var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Pedidos = require('../models/pedidos');
const cors = require('../routes/cors');
router.use(bodyParser.json());


router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, async (req, res, next) => {
  try{
    
    const pedidosBanco = await Pedidos.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(pedidosBanco);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
    
})

module.exports = router;