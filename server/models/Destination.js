const mongoose = require('mongoose');

const { Schema } = mongoose;

const destinationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
