var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

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


/* GET users listing. */
router.route('/')
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(servicos);
})
.post((req, res, next) => {

  let proxId = 1 + servicos.map(p => p.id).reduce((x, y) => Math.max(x,y));
  let servico = {...req.body, id: proxId};
  servicos.push(servico);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(servico);
})

router.route('/:id')
.delete((req, res, next) => {
  
  servicos = servicos.filter(function(value, index, arr){ 
    return value.id != req.params.id;
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
})
.put((req, res, next) => {
  
  let index = servicos.map(p => p.id).indexOf(req.params.id);
  servicos.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})


module.exports = router;
