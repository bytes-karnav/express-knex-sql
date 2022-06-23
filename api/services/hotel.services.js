const knex = require('../../configs/db.configs')

module.exports = {
    create: (payload) => knex('hotels').insert(payload),
    update: (id, payload) => knex('hotels').where('id', id).update(payload),
    getById: (id) => knex('hotels').where('id', id).andWhere('deleted_at', null),
    getAll: () => knex('hotels').where('is_deleted', null),
};