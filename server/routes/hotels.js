import express from 'express'
import Hotels from '../models/Hotels.js'

const router = express.Router()

//create
router.post('/', async (req, res) => {

    const newHotel = new Hotels(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch (err) {
        res.status(500).json(err)
    }

})
//update
//delete
//get
//get all

export default router