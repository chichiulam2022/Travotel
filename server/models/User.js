const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Booking = require('./Booking');


const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        trim: true
      },
      firstName: {
        type: String,
        required: false,
        trim: true
      },
      lastName: {
        type: String,
        required: false,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        required: true,
      },
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ],
      bookings: [Booking.schema]
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
  // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;