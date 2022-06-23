/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    // India state table creation
    return knex.schema
        .createTable('states', function (table) {
            table.increments('id').primary();
            table.string('name', 60).notNullable();
            table.string('prefix', 5).nullable();
            table.bigint('fk_country_id', 5).notNullable();
            table.boolean('union_territory').nullable().defaultTo(false).comment('Union Territory');
            table.boolean('is_blocked').notNullable().defaultTo(false);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
