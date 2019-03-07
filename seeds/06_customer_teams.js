
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers_teams').insert([
        {id: 1, customerId: 1, teamId:1}

      ])
      .then(() => {
        return knex.raw("SELECT setval('customers_teams_id_seq', (SELECT MAX(id) FROM customers_teams))")
      })
    })
}
