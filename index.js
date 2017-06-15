'use strict';
const db = require('./test/db');

console.log('Hi there');

db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })
    .then(() => process.exit(0));
