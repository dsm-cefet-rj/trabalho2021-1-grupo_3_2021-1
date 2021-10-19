var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Produtos = require('../models/produtos');
const cors = require('../routes/cors');
router.use(bodyParser.json());


router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, async (req, res, next) => {
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

module.exports = router;