var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Pedidos = require('../models/pedidos');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());


router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  console.log(req.user);
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
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
  Pedidos.create(req.body)
  .then((pedido) => {
      console.log('Pedido criado ', pedido);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(pedido);
  }, (err) => next(err))
  .catch((err) => next(err));

})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    //populate preenche o array de atividades com os documentos do collection actividades.
    const pedidos = await Pedidos.findById(req.params.id).populate('atividades');
    if(pedidos != null){
      res.statusCode = 200;
      res.json(pedidos);
    }else{
      err = {};
      res.statusCode = 404;
      res.json(err);
    }
  
  }catch(errParam){
    console.log(errParam);
    res.statusCode = 404;
    res.json({});
  }  

})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
  Pedidos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
  Pedidos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((pedido) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(pedido);
  }, (err) => next(err))
  .catch((err) => next(err));

})


module.exports = router;