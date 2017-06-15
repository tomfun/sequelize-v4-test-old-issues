'use strict';

const db = require('../db');
const {User, Interest, Post} = require('./models');

describe('Test Many To Many with LIMIT and OFFSET', () => {
    before('create table', async () => {
        await db.sync({force: true});
    });
    before('create rows', async () => {
        await User.bulkCreate([
            {username: "tyler"},
            {username: "skyler"},
            {username: "hector"}
        ]);

        await Post.bulkCreate([
            {title: "a", content: "aaa"},
            {title: "b", content: "bbb"}
        ]);


        const users = await User.findAll();
        const posts = await Post.findAll();
// console.log('\n\nposts:', posts)
        await posts[0].setAuthor(users[1]);
        await posts[1].setAuthor(users[0]);

        await Interest.bulkCreate([
            {name: "walking"},
            {name: "sleeping"},
            {name: "hunting"},

        ]);

        const interests = await Interest.findAll();

        await users[0].setInterests([interests[1]]);
        await users[2].setInterests([interests[0], interests[2]]);
    });
    after('clean up', async () => {
        // await new Promise((done) => setTimeout(done, 1000));
        // await db.drop({force: true});
    });

    it('test nothing', async () => {
        const postsWithRelations = await Post.findAll(
            {
                limit: 3, offset: 0,
                include: [{model: User, as: 'author', where: {}, include: [
                    {model: Interest, as: 'interests', where: {name: 'sleeping'}}

                ]}]
            });
    });

});