var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

let produtos = [
  {
    "num": 4325354254,
    "preco": 45,
    "local": "gdhgfh",
    "categoria": "veiculo",
    "desc": "dfhgfhshfsg",
    "name": "gfhfh",
    "id": 2
  },
  {
    "num": 4325354254,
    "preco": 45,
    "local": "gdhgfh",
    "categoria": "veiculo",
    "desc": "dfhgfhshfsg",
    "name": "gfhfh",
    "id": 6
  }
];


/* GET users listing. */
router.route('/')
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(produtos);
})
.post((req, res, next) => {

  let proxId = 1 + produtos.map(p => p.id).reduce((x, y) => Math.max(x,y));
  let produto = {...req.body, id: proxId};
  produtos.push(produto);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(produto);
})

router.route('/:id')
.delete((req, res, next) => {
  
  produtos = produtos.filter(function(value, index, arr){ 
    return value.id != req.params.id;
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
})
.put((req, res, next) => {
  
  let index = produtos.map(p => p.id).indexOf(req.params.id);
  produtos.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})


module.exports = router;
