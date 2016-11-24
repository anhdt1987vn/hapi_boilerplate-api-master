'use strict';

const Path = require('path');
//const SailsDisk = require('sails-disk');
const SailsMySQL = require('sails-mysql');
//const objMySQL = require('mysql')

module.exports = {

    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000
    },

    main: {
        connection: process.env.NODE_ENV === 'dev' ? 'dogMng' : 'dogMng'
    },

    /*dogwater: {
        connections: {
            diskDb: {
                adapter: 'disk'
            }
        },
        adapters: {
            disk: SailsDisk
        }
    },*/

    dogwater: {
        connections: {
            dogMng: {
                adapter: 'dogMySQL',
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: '1234abcd',
                database: 'boilerplate_api_master',
                charset: 'utf8',
                //collation : 'utf8_swedish_ci'
            }
        },
        adapters: {
            dogMySQL: SailsMySQL
        }
    },

    /*development: {
        client: 'mysql',
        connection: {
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: '1234abcd',
          database: 'boilerplate_api_master',
        }
    },

    production: {
        client: 'postgresql',
        connection: {
          database: 'example'
        },
        pool: {
          min: 2,
          max: 10
        }
    },*/


    poop: {
        logPath: Path.normalize(`${__dirname}/../poop.log`)
    }

};
