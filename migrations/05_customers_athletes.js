exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers_athletes', function(table){
    table.increments('id')

    table.integer('customerId').notNullable()
    table.foreign('customerId').references('customers.id').onDelete('CASCADE')

    table.integer('athleteId').notNullable()
    table.foreign('athleteId').references('athletes.id').onDelete('CASCADE')


    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers_athletes')
}
