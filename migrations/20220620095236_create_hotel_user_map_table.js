/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('hotel_user_map', function (table) {
            table.increments('id').primary();
            table.bigint('fk_hotel_id', 12).notNullable();
            table.bigint('fk_user_id', 12).notNullable();
            table.foreign('fk_hotel_id').references('id').inTable('hotels');
            table.foreign('fk_user_id').references('id').inTable('users');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("hotel_user_map");
};
