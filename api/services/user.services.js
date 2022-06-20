const knex = require('../../configs/db.configs')

module.exports = {
    getAllUsers: (payload) => {
        return knex.select('*').from('users')
    }
};