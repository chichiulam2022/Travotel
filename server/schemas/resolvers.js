const { User, Destination, Comment, Booking, Hotel } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')

            return userData;
          }

          throw new AuthenticationError('Not logged in!')

        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')

        },
        users: async () => {
            return User.find()
            .select('-__v -password')

        },
        destination: async () => {
            return await Destination.find();
        },

        hotel: async (parent, { _id }) => {
            return await Hotel.findById(_id).populate('destination');
            // return await Hotel.find();
        },

        hotels: async (parent, { destination, name }) => {
            const params = {};
      
            if (destination) {
              params.destination = destination;
            }
      
            if (name) {
              params.name = {
                $regex: name
              };
            }
      
            return await Hotel.find(params).populate('destination');
        },
      

        booking: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'bookings.hotels',
                populate: 'destination'
              });
      
              return user.bookings.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
        },

        comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comment.find(params).sort({ createdAt: -1 });
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };           
            // return { user };           

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

        },


        addComment: async (parent, args, context) => {
            if (context.user) {
                const comment = await Comment.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { comments: comment._id } },
                    { new: true }
                );

                return comment;
            }

            throw new AuthenticationError('You need to be logged in to be able to make comments!');
        },

        updateHotel: async (parent, { _id, nights }) => {
            const decrement = Math.abs(nights * -1);
      
            return await Hotel.findByIdAndUpdate(_id, { $inc: { nights: decrement } }, { new: true });
        },

        addBooking: async (parent, { hotels }, context) => {
            console.log(context);
            if (context.user) {
              const booking = new Booking({ hotels });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { bookings: booking } });
      
              return booking;
            }
      
            throw new AuthenticationError('To book a hotel you need to be logged in');
        },


    }


}    

module.exports = resolvers;