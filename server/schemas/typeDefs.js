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
        cheapestPrice: Float
        featured: Boolean

    }

    type Destination {
        _id: ID
        name: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        destination: [Destination]
        comments(username: String): [Comment]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth

    }
`;


//exports typeDefs module
module.exports = typeDefs;