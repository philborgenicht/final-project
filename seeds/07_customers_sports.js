
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers_sports').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers_sports').insert([
        {id: 1, customerId: 1, sportId:1}

      ])
      .then(() => {
        return knex.raw("SELECT setval('customers_sports_id_seq', (SELECT MAX(id) FROM customers_sports))")
      })
    })
}
