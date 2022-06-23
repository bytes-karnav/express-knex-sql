require('dotenv').config();
const knex = require('knex');

const configs = require('./configs')(process.env.NODE_ENV);

module.exports = knex(configs);