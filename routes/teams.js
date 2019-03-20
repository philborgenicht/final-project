var express = require('express');
var router = express.Router();
const knex = require('../knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('teams')
  .select('*')
  .then(data=>{
    res.status(200).json(data)
  })
})

router.get('/:id', function(req,res, next) {
  let id=req.params.id
  knex('teams')
  .where('id', id)
  .then(data=>{
    res.status(200).json(data[0])
  })
})
router.post('/', function(req, res, next){


  knex('teams')
  .where('name', req.body.name)
  .first()
  .then((team)=>{
    if(team){
      return next({ status: 400, message: 'That team is already in our database...' })
    }
    return(req.body)
  })
    .then((newTeam)=>{
      return knex('teams')
      .insert(newTeam)
      .returning(['id', 'name', 'city', 'state', 'sportName', 'sportId', 'onList'])
          .then((data) => {
          res.status(200).json(data[0])
    })
  })
})
// router.post('/', function(req, res, next){
//   knex('teams')
//   // .where('name', req.body.name)
//   // .first()
//   // .then((sport))=>{
//   //   if(sport){
//   //     return next({status:400, message: 'Sorry, that sport is already in the database'})
//   //   }
//   // }
//     .insert(req.body)
//     .returning(['id', 'name', 'city', 'state', 'sportName', 'sportId', 'onList'])
//     .then((data) => {
//     res.status(200).json(data[0])
//   })
// })

router.patch('/:id', function(req,res,next){
    let id=req.params.id
    let info=req.body
    knex('teams')
    .where('id', id)
    .update(info)
    .returning(['id', 'name', 'city', 'state', 'sportName', 'sportId', 'onList'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

router.delete('/:id', function(req, res, next){
    let id=req.params.id
    knex('teams')
    .where('id', id)
    .del()
    .returning(['id', 'name', 'city', 'state', 'sportName', 'sportId', 'onList'])
    .then(data=>{
      res.status(200).json(data[0])
    })
})

module.exports = router;
