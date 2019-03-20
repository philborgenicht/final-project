var express = require('express');
var router = express.Router();
const knex = require('../knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('athletes')
  .select('*')
  .then(data=>{
    res.status(200).json(data)
  })
})

router.get('/:id', function(req,res, next) {
  let id=req.params.id
  knex('athletes')
  .where('id', id)
  .then(data=>{
    res.status(200).json(data[0])
  })
})

router.post('/', function(req, res, next){


  knex('athletes')
  .where('name', req.body.name)
  .first()
  .then((athlete)=>{
    if(athlete){
      return next({ status: 400, message: 'That athlete is already in our database' })
    }
    return(req.body)
  })
    .then((newAthlete)=>{
      return knex('athletes')
      .insert(newAthlete)
      .returning(['id', 'name','sport', 'sportId', 'teamName', 'teamId', 'onTeam', 'position' ])
          .then((data) => {
          res.status(200).json(data[0])
    })
  })
})
//
// router.post('/', function(req, res, next){
//   knex('athletes')
//   // .where('name', req.body.name)
//   // .first()
//   // .then((athlete))=>{
//   //   if(athlete){
//   //     return next({status:400, message: 'Sorry, that athlete is already in the database'})
//   //   }
//   // }
//     .insert(req.body)
//     .returning(['id', 'name','sport', 'sportId', 'teamName', 'teamId', 'onTeam', 'position' ])
//     .then((data) => {
//     res.status(200).json(data[0])
//   })
// })

router.patch('/:id', function(req,res,next){
    let id=req.params.id
    let info=req.body
    knex('athletes')
    .where('id', id)
    .update(info)
    .returning(['id', 'firstName', 'lastName','sport', 'sportId', 'teamName', 'teamId', 'position' ])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

router.delete('/:id', function(req, res, next){
    let id=req.params.id
    knex('athletes')
    .where('id', id)
    .del()
    .returning(['id', 'firstName', 'lastName','sport', 'sportId', 'teamName', 'teamId', 'position' ])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

module.exports = router;
