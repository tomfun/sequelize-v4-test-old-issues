'use strict';

const sequelize = new Sequelize('db', 'root', 'password', {
    host: 'db',
    dialect: 'mysql',

    pool: {
        max: 2,
        min: 0,
        idle: 10000
    },
});

exports = sequelize;