/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('address', function (table) {
            table.increments('id').primary();
            table.string('street', 255).notNullable();
            table.string('city', 60).notNullable();
            table.string('state', 60).notNullable();
            table.string('zip', 6).notNullable();
            table.string('country', 60).notNullable();
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
        .dropTable("address");
};


