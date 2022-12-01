const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    username: String
    email: String

    }

    type Query {
        me: User
    }
`;


//exports typeDefs module
module.exports = typeDefs;