/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('countries', function (table) {
            table.increments('id').primary();
            table.string('name', 60).notNullable();
            table.string('prefix', 3).nullable();
            table.smallint('isd_code', 3).nullable();
            table.boolean('is_blocked').notNullable().defaultTo(false);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
