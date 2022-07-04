/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('packages', function (table) {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.text('description', 255).notNullable();
        table.text('fk_amenities_ids').nullable();
        table.string('duration', 50).notNullable();
        table.string('difficulty', 30).notNullable();
        table.string('age_group', 20).notNullable();
        table.bigint('max_altitude', 12).notNullable();
        table.bigint('createdBy', 12).defaultTo(knex.fn.now());
        table.bigint('updatedBy', 12).defaultTo(knex.fn.now());
        table.dateTime('deletedAt').nullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable("packages");
};
