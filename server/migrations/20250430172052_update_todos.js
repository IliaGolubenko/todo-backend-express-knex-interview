
exports.up = function(knex) {
  return knex.schema.alterTable('todos', function(table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('group_id').unsigned();
      table.foreign('group_id').references('id').inTable('groups');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('todos', function(table) {
    table.dropColumn('user_id');
    table.dropForeign('user_id');
    table.dropColumn('group_id');
    table.dropForeign('group_id');
});
};