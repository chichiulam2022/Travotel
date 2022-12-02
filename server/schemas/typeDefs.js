const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        username: String
        firstName: String
        lastName: String
        email: String

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
        city: String
        address: String
        photos: String
        description: String
        rating: Int
        rooms: String
        nights: Int
        price: Float
        featured: Boolean
        destination: Destination

    }

    type Booking {
        _id: ID
        purchaseDate: String
        hotels: [Hotel]
    }


    type Query {
        me: User
        user(username: String!): User
        destination: [Destination]
        comments(username: String): [Comment]
        booking(_id: ID!): Booking
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): User
        addComment(commentText: String!): Comment
        addBooking(hotels: [ID]!): Booking

    }

    type Auth {
        token: ID!
        user: User
    }
`;


//exports typeDefs module
module.exports = typeDefs;