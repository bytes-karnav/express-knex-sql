const jwt = require('jsonwebtoken');
const knex = require('../../configs/db.configs')
const bcrypt = require('bcrypt');
module.exports = {
    validateEmail: (email) => knex.select('*').from('users').where('email', email),

    hashPassword: (password) => bcrypt.hash(password, 10),

    validatePassword: (password, hash) => bcrypt.compare(password, hash),

    signJWT: (payload) => jwt.sign(payload, process.env.PASSWORD_SECRET, { expiresIn: process.env.JWT_EXPIRATION_TIME }),


    activateEMail: (email) => knex.update('deletedAt', null).from('users').where('email', email),

    register: (payload) => knex.insert(payload).into('users'),
};