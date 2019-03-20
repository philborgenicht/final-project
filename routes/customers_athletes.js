var express = require('express');
var router = express.Router();
const knex = require('../knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('customers_athletes')
  .select('*')
  .then(data=>{
    res.status(200).json(data)
  })
})

router.get('/:id', function(req,res, next) {
  let id=req.params.id
  knex('customers_athletes')
  .where('id', id)
  .then(data=>{
    res.status(200).json(data[0])
  })
})
router.post('/', function(req, res, next){


  knex('customers_athletes')
  .where({'customerId':req.body.customerId, 'athleteId':req.body.athleteId })
  .first()
  .then((entry)=>{
    if(entry){
      res.status(400).json("he is already on your team, silly!")
    }
    return(req.body)
  })
    .then((newEntry)=>{
      return knex('customers_athletes')
      .insert(newEntry)
      .returning(['id', 'customerId', 'athleteId'])
          .then((data) => {
          res.status(200).json(data[0])
    })
  })
})
// router.post('/', function(req, res, next){
//   knex('customers_athletes')
//   // .where('email', req.body.email)
//   // .first()
//   // .then((customer))=>{
//   //   if(customer){
//   //     return next({status:400, message: 'Sorry, that email is taken'})
//   //   }
//   // }
//     .insert(req.body)
//     .returning(['id', 'customerId', 'athleteId'])
//     .then((data) => {
//     res.status(200).json(data[0])
//   })
// })

router.patch('/:id', function(req,res,next){
    let id=req.params.id
    let info=req.body
    knex('customers_athletes')
    .where('id', id)
    .update(info)
    .returning(['id', 'customerId', 'athleteId'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

router.delete('/:id', function(req, res, next){
    let id=req.params.id
    knex('customers_athletes')
    .where('id', id)
    .del()
    .returning(['id', 'customerId', 'athleteId'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

module.exports = router;
