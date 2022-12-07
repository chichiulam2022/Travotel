
// import mongoose from 'mongoose'

const mongoose =  require('mongoose')
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  destination: {
    type: Schema.Types.ObjectId,
    ref: 'Destination',
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: String
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  rooms: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  nights: {
    type: Number,
    min: 0,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;