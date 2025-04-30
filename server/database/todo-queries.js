const knex = require("./connection.js");

async function all() {
  return knex("todos")
    .join("users", "todos.user_id", "users.id")
    .join("groups", "todos.group_id", "groups.id")
    .select("todos.*", "users.name as user_name");
}

async function get(id) {
  const results = await knex("todos")
    .join("users", "todos.user_id", "users.id")
    .join("groups", "todos.group_id", "groups.id")
    .select("todos.*", "users.name as user_name")
    .where({ id });
  return results[0];
}

async function create(title, order) {
  const results = await knex("todos")
    .insert({ title, order, user_id, group_id })
    .returning("*");
  return results[0];
}

async function update(id, properties) {
  const results = await knex("todos")
    .where({ id })
    .update({ ...properties })
    .returning("*");
  return results[0];
}

// delete is a reserved keyword
async function del(id) {
  const results = await knex("todos").where({ id }).del().returning("*");
  return results[0];
}

async function clear() {
  return knex("todos").del().returning("*");
}

module.exports = {
  all,
  get,
  create,
  update,
  delete: del,
  clear,
};
