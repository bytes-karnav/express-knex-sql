const knex = require('../../configs/db.configs')

module.exports = {
    getById: (id) => knex('packages').where('id', id),
    getAll: () => knex.select('*').from('packages'),
};