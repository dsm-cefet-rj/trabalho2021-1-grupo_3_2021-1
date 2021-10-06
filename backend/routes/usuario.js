var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const usuario = require('../models/usuario');
const Produto = require('../models/produtos');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());


router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {

  try{
    const usuarioBanco = await usuario.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(usuarioBanco);
  }catch(err){
    console.log(err)
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
    
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    
    usuario.create(req.body)
    .then((produto) => {
        console.log('Atividade criada', atividade);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(produto);
    }, (err) => next(err))
    .catch((err) => next(err));
  
})

module.exports = router;
