var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Servicos = require('../models/servicos');

router.use(bodyParser.json());


/* GET users listing. */
router.route('/')
.get(async (req, res, next) => {

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
.post((req, res, next) => {
  
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
.get(async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const resp = await Servicos.findById(req.params.id);
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
  
  Servicos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put((req, res, next) => {
  
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