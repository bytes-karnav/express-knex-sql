/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.raw(`ALTER TABLE public.user_address_map ADD CONSTRAINT user_address_map_un UNIQUE (fk_address_id,fk_user_id);`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
