/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('hotels', function (table) {
            table.increments('id').primary();
            table.string('name', 255).notNullable();
            table.text('description', 255).notNullable();
            table.smallint('room_qty', 12).nullable();
            table.bigint('fk_address_id', 255).nullable();
            table.string('phone', 12).notNullable();
            table.dateTime('createdAt').defaultTo(knex.fn.now());
            table.dateTime('updatedAt').defaultTo(knex.fn.now());
            table.bigint('createdBy', 12).nullable();
            table.bigint('updatedBy', 12).nullable();
            table.dateTime('deletedAt').nullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("hotels");
};



exports.config = { transaction: false };