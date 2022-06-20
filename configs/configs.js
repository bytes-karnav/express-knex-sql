const dotenv = require('dotenv');
dotenv.config();

const client = "postgresql"
const migrations = {
  "tableName": "knex_migrations"
}

module.exports = (ENV) => {
  this.database = {
    "development": {
      client,
      "connection": {
        "database": process.env.DEVELOPMENT_DB_NAME,
        "user": process.env.DEVELOPMENT_DB_USERNAME,
        "password": process.env.DEVELOPMENT_DB_PASSWORD
      },
      "pool": { "min": 2, "max": 10 },
      migrations
    },

    "staging": {
      client,
      "connection": {
        "database": process.env.STAGING_DB_NAME,
        "user": process.env.STAGING_DB_USERNAME,
        "password": process.env.STAGING_DB_PASSWORD
      },
      "pool": { "min": 2, "max": 10 },
      migrations
    },

    "production": {
      client,
      "connection": {
        "database": process.env.PRODUCTION_DB_NAME,
        "user": process.env.PRODUCTION_DB_USERNAME,
        "password": process.env.PRODUCTION_DB_PASSWORD
      },
      "pool": { "min": 2, "max": 10 },
      migrations
    }
  }

  return this.database[ENV];
}

