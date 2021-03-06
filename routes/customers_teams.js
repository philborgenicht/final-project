var express = require('express');
var router = express.Router();
const knex = require('../knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('customers_teams')
  .select('*')
  .then(data=>{
    res.status(200).json(data)
  })
})

router.get('/:id', function(req,res, next) {
  let id=req.params.id
  knex('customers_teams')
  .where('id', id)
  .then(data=>{
    res.status(200).json(data[0])
  })
})

router.post('/', function(req, res, next){


  knex('customers_teams')
  .where({'customerId':req.body.customerId, 'teamId':req.body.teamId })
  .first()
  .then((entry)=>{
    if(entry){
      return next({ status: 400, message: 'You already own that team...' })
    }
    return(req.body)
  })
    .then((newEntry)=>{
      return knex('customers_teams')
      .insert(newEntry)
      .returning(['id', 'customerId', 'teamId'])
          .then((data) => {
          res.status(200).json(data[0])
    })
  })
})

router.patch('/:id', function(req,res,next){
    let id=req.params.id
    let info=req.body
    knex('customers_teams')
    .where('id', id)
    .update(info)
    .returning(['id', 'customerId', 'teamId'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

router.delete('/:id', function(req, res, next){
    let id=req.params.id
    knex('customers_teams')
    .where('id', id)
    .del()
    .returning(['id', 'customerId', 'teamId'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

module.exports = router;
