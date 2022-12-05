const db = require('./connection');
const { User, Destination } = require('../models');

db.once('open', async () => {

  await Destination.deleteMany();

  const destination = await Destination.insertMany([
    { name: 'London' },
    { name: 'New York City' },
    { name: 'Sao Paolo' },
    { name: 'San Francisco' },
    { name: 'Toronto' },
    { name: 'Mexico City' },
    { name: 'Dubai' }
  ]);

  console.log('destination seeded');

  
  
  await User.deleteMany();

  await User.create({
    username: 'jonsnow',
    firstName: 'Jon',
    lastName: 'Snow',
    email: 'jonsnow@test.com',
    password: 'test123',
  });

  await User.create({
    username: 'noone',
    firstName: 'Arya',
    lastName: 'Stark',
    email: 'arya@noone.com',
    password: 'noone2345'
  });

  console.log('users seeded');

  process.exit();
});
