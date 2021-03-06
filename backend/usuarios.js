var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuarios = require('../models/usuarios');
const cors = require('./cors');

router.use(bodyParser.json());


/* GET users listing. */
router.route('/')
.get(async (req, res, next) => {

  try{
    const usuariosBanco = await Usuarios.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(usuariosBanco);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
    
})
.post((req, res, next) => {
  
  Usuarios.create(req.body)
  .then((usuario) => {
      console.log('Usuario criado ', usuario);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(usuario);
  }, (err) => next(err))
  .catch((err) => next(err));

})

router.route('/:id')
.get(async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const resp = await Usuarios.findById(req.params.id);
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
  
  Usuarios.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put((req, res, next) => {
  
  Usuarios.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((usuario) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(usuario);
  }, (err) => next(err))
  .catch((err) => next(err));

})


module.exports = router;