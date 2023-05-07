/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {id: 1, user_id: 1, content: "test1"},
    {id: 2, user_id: 2, content: "test2"},
  ]);
};
