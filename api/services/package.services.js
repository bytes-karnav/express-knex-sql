const knex = require('../../configs/db.configs')

module.exports = {
    create: (payload) => knex('packages').insert(payload),
    update: (id,payload) => knex('packages').where('id', id).update(payload),
    getById: (id) => knex('packages').where('id', id),
    getAll: () => knex.select('*').from('packages'),
};