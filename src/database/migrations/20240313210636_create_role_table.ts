import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('role', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.tinyint('access_level').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('role');
}
