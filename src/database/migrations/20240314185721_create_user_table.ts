import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', function (table) {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('name').notNullable();
    table.string('last_name').notNullable();
    table.string('password').notNullable();
    table.integer('role_id').unsigned().notNullable();
    table.timestamps(true, true);

    table.integer('role_id').unsigned().notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user');
}
