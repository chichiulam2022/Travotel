const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const  = mongoose;

const bookingSchema = new Schema(
    {
        purchaseDate: {
            type: Date,
            default: Date.now
        },
        checkinDate: {
            type: Date,
            default: Date.now
        },
        checkoutDate: {
            type: Date,
            default: Date.now
        },
        hotels: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Hotels'
            }
        ]
    }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;