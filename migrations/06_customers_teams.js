exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers_teams', function(table){
    table.increments('id')

    table.integer('customerId').notNullable()
    table.foreign('customerId').references('customers.id').onDelete('CASCADE')

    table.integer('teamId').notNullable()
    table.foreign('teamId').references('teams.id').onDelete('CASCADE')

    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers_teams')
}
