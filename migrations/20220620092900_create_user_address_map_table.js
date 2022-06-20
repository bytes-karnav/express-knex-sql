/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('user_address_map', function (table) {
            table.increments('id').primary();
            table.bigint('fk_user_id', 12).notNullable();
            table.bigint('fk_address_id', 12).notNullable();
            table.foreign('fk_user_id').references('id').inTable('users');
            table.foreign('fk_address_id').references('id').inTable('address');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("user_address_map");
};
