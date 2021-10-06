var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Produtos = require('../models/produtos');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());


router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  console.log(req.user);
  try{
    const produtosBanco = await Produtos.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(produtosBanco);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
    
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
  Produtos.create(req.body)
  .then((produto) => {
      console.log('Produto criado ', produto);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(produto);
  }, (err) => next(err))
  .catch((err) => next(err));

})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    //populate preenche o array de usuario com os documentos do collection actividades.
    const produtos = await Produtos.findById(req.params.id).populate('usuario');
    if(produtos != null){
      res.statusCode = 200;
      res.json(produtos);
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
  
  Produtos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
  Produtos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((produto) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(produto);
  }, (err) => next(err))
  .catch((err) => next(err));

})


module.exports = router;