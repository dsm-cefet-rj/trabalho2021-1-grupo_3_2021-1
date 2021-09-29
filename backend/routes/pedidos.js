var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Pedidos = require('../models/pedidos');

router.use(bodyParser.json());


/* GET users listing. */
router.route('/')
.get(async (req, res, next) => {

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
.post((req, res, next) => {
  
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
.get(async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const resp = await Pedidos.findById(req.params.id);
    if(resp != null){
      res.statusCode = 200;
      res.json(resp);
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
.delete((req, res, next) => {
  
  Pedidos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put((req, res, next) => {
  
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