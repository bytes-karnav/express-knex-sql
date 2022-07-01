const knex = require('../../configs/db.configs')

module.exports = {
    create: (payload) => knex('hotels').insert(payload),
    update: (id, payload) => knex('hotels').where('id', id).update(payload),
    getById: (id) => knex.select(['id','name','description','room_qty']).from('hotels').where('id', id),
    getAll: () => knex.select(['id','name','description','room_qty']).from('hotels')
};