/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').primary();
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.string('email', 255).notNullable().index().unique();
            table.string('password').notNullable();
            table.string('phone', 12).nullable();            
            table.bigint('fk_address_id').nullable();
            table.dateTime('createdAt').defaultTo(knex.fn.now());
            table.dateTime('updatedAt').defaultTo(knex.fn.now());
            table.dateTime('deletedAt').nullable();
            table.bigint('createdBy', 12).nullable();
            table.bigint('updatedBy', 12).nullable();  
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("users");
};


exports.config = { transaction: false };