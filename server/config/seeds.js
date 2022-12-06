const db = require("./connection");
const { User, Hotel, Destination } = require("../models");

db.once("open", async () => {
  await Destination.deleteMany();

  const destination = await Destination.insertMany([
    { name: "London" },
    { name: "New York City" },
    { name: "Sao Paolo" },
    { name: "San Francisco" },
    { name: "Toronto" },
    { name: "Mexico City" },
    { name: "Dubai" },
  ]);

  console.log("destination seeded");

  await Hotel.deleteMany();
  const hotel = await Hotel.insertMany([
    {
      name: "1851 Yonge Street",
      type: "House",
      destination: "Toronto",
      city: "Toronto",
      address: "1851 Yonge Street",
      distance: "15km",
      photos: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      ],
      description:
        "You will have a private room in an apartment shared with myself and my brother. We are fully vaccinated and keep the place as clean and sanitized as possible. We are both quiet individuals that respect your space and time! We are always open to as little or as much conversation as you please~ :D",
      likes: 45,
      rooms: 3,
      price: 300,
      nights: 1,
      featured: true,
    },
    {
      name: "Cozy private place",
      type: "House",
      destination: "Mexico City",
      city: "Mexico City",
      address: "1320 Steels Avenue",
      distance: "13km",
      photos: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      ],
      description:
        "This is a basement apartment with a separate entrance in a luxury neighborhood within a walking distance to all of the amenities. Newly built one bedroom apartment with a full kitchen and living room area as will as your own laundry facility. There is a large in suite bathroom with a shower. The bedroom is equipped with a queen size bed and a dresser with a tv. 9.2foot ceilings.",
      likes: 40,
      rooms: 2,
      price: 300,
      nights: 1,
      featured: true,
    },
    {
      name: "Work and Relax Place",
      type: "Apartment",
      destination: "Hong Kong",
      city: "Hong Kong",
      address: "1200 Des Voeux Road West",
      distance: "2km",
      photos: [
        "https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      ],
      description:
        "A renovated studio falt at 2/F & Roof. Open view with river & trees Walking distance to historical sports, beachand next to convenience stores. 5G Wifi connection for smooth work from home. Open space for BBQ grilled at the rooftop. Limited access for Kitchen cooking. Washing machine is prepared for long-term stay.",
      likes: 34,
      rooms: 2,
      price: 300,
      nights: 1,
      featured: false,
    },
    {
      name: "Center of London",
      type: "Apartment",
      destination: "London",
      city: "London",
      address: "1390 St George's Dr",
      distance: "20km",
      photos: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      ],
      description:
        "The Central Zone of London. Double bedroom, currently with large desk, comfortable office chair , wardrobe and comfortable double bed. The bedroom is in a charming and airy first floor  apartment in an Historic Victorian Mansion Block.",
      likes: 5,
      rooms: 1,
      price: 300,
      nights: 1,
      featured: true,
    },
    {
      name: "Andy's House",
      type: "Apartment",
      destination: "New York City",
      city: "New York City",
      address: "1390 Park Home Rd",
      distance: "20km",
      photos: [
        "https://images.unsplash.com/photo-1611971263023-105938ce12ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      ],
      description:
        "Make Upper Manhattan your new base for the week and you’ll be just a short 5-10-minute away from the iconic Central Park. And because we’ve thought of everything, the fabulous sights don’t stop at your front door…",
      likes: 4,
      rooms: 2,
      price: 300,
      nights: 1,
      featured: true,
    },
    {
      name: "Loft in Sao Paolo",
      type: "House",
      destination: "Sao Paolo",
      city: "Sao Paolo",
      address: "1400 Queens Avenue",
      distance: "2km",
      photos: [
        "https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
      ],
      description:
        "Hospede-se em um dos cartões postais da cidade de São Paulo, o Edifício Copan. Um dos mais importantes e emblemáticos edifícios da cidade, localizado na Avenida Ipiranga, inaugurado em 1966. É um dos símbolos da arquitetura moderna brasileira, concebido pelo arquiteto Oscar Niemeyer com projeto estrutural do eng. Joaquim Cardozo.",
      likes: 107,
      rooms: 2,
      price: 300,
      nights: 1,
      featured: true,
    },
    {
      name: "Pleasant bedroom in Victorian home",
      type: "House",
      destination: "San Francisco",
      city: "San Francisco",
      address: "1400 Queens Avenue",
      distance: "2km",
      photos: [
        "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      ],
      description:
        "Hospede-sCozy private room in my Victorian home, it’s a nice comfortable place to relax after a busy work day or after a day of adventuring in the city! ",
      likes: 3,
      rooms: 3,
      price: 300,
      nights: 1,
      featured: true,
    },
    {
      name: "House in Dubai",
      type: "House",
      destination: "Dubai",
      city: "Dubai",
      address: "1400 Parkway Rd",
      distance: "20km",
      photos: [
        "https://images.unsplash.com/photo-1631049307485-2bfb23080676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      ],
      description:
        "Unlock Holiday Homes is the premier vacation rental company that combines the best of  both worlds: convenience of hotel services with the comfort of a home.  ",
      likes: 36,
      rooms: 3,
      price: 300,
      nights: 1,
      featured: true,
    },
  ]);

  await User.deleteMany();

  await User.create({
    username: "jonsnow",
    firstName: "Jon",
    lastName: "Snow",
    email: "jonsnow@test.com",
    password: "test123",
  });

  await User.create({
    username: "noone",
    firstName: "Arya",
    lastName: "Stark",
    email: "arya@noone.com",
    password: "noone2345",
  });

  console.log("users seeded");
=======
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
