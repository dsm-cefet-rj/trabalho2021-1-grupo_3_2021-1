var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

let pedidos = [
  {
    "num": 4325354254,
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
  res.json(pedidos);
})
.post((req, res, next) => {

  let proxId = 1 + pedidos.map(p => p.id).reduce((x, y) => Math.max(x,y));
  let pedido = {...req.body, id: proxId};
  pedidos.push(pedido);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(pedido);
})

router.route('/:id')
.delete((req, res, next) => {
  
  pedidos = pedidos.filter(function(value, index, arr){ 
    return value.id != req.params.id;
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
})
.put((req, res, next) => {
  
  let index = pedidos.map(p => p.id).indexOf(req.params.id);
  pedidos.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})


module.exports = router;
