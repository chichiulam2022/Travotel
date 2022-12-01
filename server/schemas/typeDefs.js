const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    firstName: String
    lastName: String
    email: String

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
    }
`;


//exports typeDefs module
module.exports = typeDefs;