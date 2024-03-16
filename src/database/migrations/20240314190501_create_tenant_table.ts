import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tenant", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("logo").nullable();
    table.string("description").nullable();
    table.timestamps(true, true);

    table
      .integer("owner_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("user");
  });

  return knex.schema.alterTable("user", (table) => {
    table
      .integer("tenant_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("tenant");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table("user", (table) => {
    table.dropForeign("tenant_id");
  });

  return knex.schema.dropTableIfExists("tenant");
}
