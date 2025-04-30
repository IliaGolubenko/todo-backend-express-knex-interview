
exports.up = function(knex) {
  return knex.schema.createTable('teams', function(table) {
      table.increments('id').primary();
      table.string('name').unique().notNullable();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('group_id').unsigned();
      table.foreign('group_id').references('id').inTable('groups');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams');
};