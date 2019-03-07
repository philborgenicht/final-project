
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers_athletes').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers_athletes').insert([
        {id: 1, customerId: 1, athleteId:1}

      ])
      .then(() => {
        return knex.raw("SELECT setval('customers_athletes_id_seq', (SELECT MAX(id) FROM customers_athletes))")
      })
    })
}
