const { Users, Destination, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
// const { isType } = require('graphql');
const { signToken } = require('../utils/auth');
// const { countDocuments } = require('../models/User');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
          if (context.user) {
            const userData = await Users.findOne({ _id: context.user._id })
            .select('-__v -password')

            return userData;
          }

          throw new AuthenticationError('Not logged in!')

        },
        destination: async () => {
            return await Destination.find();
        },
        comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comment.find(params).sort({ createdAt: -1 });
        },

    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            // const token = signToken(user);

            return { token, user };           
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);
            return { token, user };

        }
    }


}    

module.exports = resolvers;