const mongoose = require('mongoose');

mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hotel_booking',
    process.env.MONGODB_URI || 'mongodb://localhost/hotel_booking',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;
