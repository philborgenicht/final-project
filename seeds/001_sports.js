
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sports').del()
    .then(function () {
      // Inserts seed entries
      return knex('sports').insert([
        {id: 1, name: 'Basketball', onList:false},
        {id: 2, name: 'Football', onList:false},
        {id: 3, name: 'Baseball', onList:false},
        {id: 4, name: 'Hockey', onList:false}
      ])
      .then(() => {
        return knex.raw("SELECT setval('sports_id_seq', (SELECT MAX(id) FROM sports))")
      })
    })
}
