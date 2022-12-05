const mongoose = require('mongoose');

const { Schema } = mongoose;

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
            ref: 'Hotel'
            }
        ]
    }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;