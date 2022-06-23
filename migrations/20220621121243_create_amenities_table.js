/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('amenities', function (table) {
            table.increments('id').primary();
            table.string('name', 255).notNullable();
            table.string('icon').nullable();
            table.dateTime('createdAt').defaultTo(knex.fn.now());
            table.dateTime('updatedAt').defaultTo(knex.fn.now());
            table.dateTime('deletedAt').nullable();
            table.bigint('createdBy').nullable();
            table.bigint('updatedBy').nullable();
        }).alterTable('hotels', function (table) {
            table.smallint('remained_room_qty').nullable();
            table.text('fk_amenities_ids').nullable();
            table.tinyint('stars').nullable().defaultTo(1);
            table.float('price').nullable();
            table.string('website').nullable();
            table.string('facebook').nullable();
            table.string('twitter').nullable();
            table.string('instagram').nullable();
            table.string('youtube').nullable();
        }).alterTable('address', function (table) {
            table.string('latitude').nullable();
            table.string('longitude').nullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
