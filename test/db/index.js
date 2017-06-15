'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('db', 'root', 'password', {
    host: 'db',
    dialect: 'mysql',

    pool: {
        max: 2,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;
