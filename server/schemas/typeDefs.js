const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookings: [Booking]
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }

    type Destination {
        _id: ID
        name: String
    }

    type Hotel {
        _id: ID
        name: String
        type: String
        destination: Destination
        city: String
        address: String
        distance: String
        photos: String
        description: String
        likes: Int
        rooms: String
        price: Float
        nights: Int        
        featured: Boolean
    }

    type Booking {
        _id: ID
        purchaseDate: String
        hotels: [Hotel]
    }

    type Query {
        me: User
        user(username: String!): User
        users: [User]
        destination: [Destination]
        comments(username: String): [Comment]
        hotel(_id: ID!): [Hotel]
        hotels(destination: ID, name: String): [Hotel] 
        booking(_id: ID!): Booking
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(commentText: String!): Comment
        addBooking(hotels: [ID]!): Booking
        updateHotel(_id: ID!, nights: Int!): Hotel
    }

    type Auth {
        token: ID!
        user: User
    }

    type Checkout {
        session: ID
      }
`;


//exports typeDefs module
module.exports = typeDefs;