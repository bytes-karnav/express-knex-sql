const knex = require('../../configs/db.configs')

module.exports = {
    create: (payload) => knex('address').insert(payload),
    createUserAddressMapping: (fk_user_id, fk_address_id) => knex('user_address_map').insert({ fk_user_id, fk_address_id }),
    createHotelAddressMapping: (fk_user_id, fk_address_id) => knex('hotel_address_map').insert({ fk_user_id, fk_address_id }),
    update: (id, payload) => knex('address').where('id', id).update(payload),
    getById: (id) => knex('address').where('id', id).andWhere('deleted_at', null)
};