import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from './routes/auth.js'

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

//middlewares
app.use('/api/auth', authRoute)
app.use('/api/users', authRoute)
app.use('/api/hotels', authRoute)
app.use('/api/rooms', authRoute)


mongoose.connection.on('disconnected', () => {
    console.log("mongoDB disconnected")
})


app.listen(8080, () => {
    connect();
    console.log("Connected to backend.");
});