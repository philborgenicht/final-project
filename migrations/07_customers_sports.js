exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers_sports', function(table){
    table.increments('id')

    table.integer('customerId').notNullable()
    table.foreign('customerId').references('customers.id').onDelete('CASCADE')

    table.integer('sportId').notNullable().unique()
    table.foreign('sportId').references('sports.id').onDelete('CASCADE')

    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers_sports')
}
