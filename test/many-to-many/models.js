'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../db');

/** @link https://github.com/sequelize/sequelize/issues/3007 */

const Post = sequelize.define('post', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
});

const User = sequelize.define('user', {
    username: Sequelize.STRING
});

const Interest = sequelize.define('interest', {
    name: Sequelize.STRING
});

User.hasMany(Post, {as: 'posts', foreignKey: 'userId'});
Post.belongsTo(User, {as: 'author', foreignKey: 'userId'});

User.belongsToMany(Interest, {as: 'interests', through: 'users_interests'});
Interest.belongsToMany(User, {as: 'users', through: 'users_interests'});

module.exports = {
    User,
    Post,
    Interest,
};
