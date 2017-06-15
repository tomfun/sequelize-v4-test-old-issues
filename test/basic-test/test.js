'use strict';

const {User} = require('./models');

describe('Test simple model operations', () => {
    it('create table', () => User.sync({force: true}));
    it('create row', () => User.create({
        username: 'Hancock'
    }));
});