var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Servicos = require('../models/servicos');
/*
let servicos = [
  {
    "num": 4325354254,
    "preco": 45,
    "local": "gdhgfh",
    "desc": "dfhgfhshfsg",
    "name": "gfhfh",
    "id": 2
  }
];
*/

/* GET serviços listing. */
router.route('/')
.get(async (req, res, next) => {

  try{
    const servicos = await Servicos.find({}).maxTime(5000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(servicos);
  }catch(err){
    next(err);
  }

})
.post((req, res, next) => {

  Servicos.create(req.body)
  .then((servico) => {
    console.log('Serviço criado ', servico);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(servico);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/:id')
.get((req, res, next) => {

  Servicos.findById(req.params.id)
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));


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
