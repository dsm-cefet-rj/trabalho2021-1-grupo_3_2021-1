var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Servicos = require('../models/servicos');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());


router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  console.log(req.user);
  try{
    const servicosBanco = await Servicos.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(servicosBanco);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
    
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
  Servicos.create(req.body)
  .then((servico) => {
      console.log('Servico criado ', servico);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(servico);
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
    const servicos = await Servicos.findById(req.params.id).populate('atividades');
    if(servicos != null){
      res.statusCode = 200;
      res.json(servicos);
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
  
  Servicos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
  Servicos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((servico) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(servico);
  }, (err) => next(err))
  .catch((err) => next(err));

})


module.exports = router;