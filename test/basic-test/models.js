'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    username: Sequelize.STRING
});

module.exports = {
    User,
};
