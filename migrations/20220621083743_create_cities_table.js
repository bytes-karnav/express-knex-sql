/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {


    return knex.schema
        .createTable('cities', function (table) {
            table.increments('id').primary();
            table.string('name', 60).notNullable();
            table.string('prefix', 5).nullable();
            table.bigint('fk_state_id').notNullable();
            table.boolean('is_district').notNullable().defaultTo(false);
            table.boolean('is_township').notNullable().defaultTo(false).comment('tahsil, taluka, taluk or Township');
            table.bigint('fk_district_id').nullable().defaultTo(null).comment('city belongs to district');
            table.boolean('is_blocked').notNullable().defaultTo(false);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
