const HotelService = require('../services/hotel.services')

module.exports = {
    create: async (req, res) => {
        try {
            const { name, description, room_qty, phone, } = req.body
            if (!name && !description && !room_qty && !phone) {
                return res.status(400).json({ message: 'Please provide valid data' })
            }
            const result = await HotelService.create(req.body)
            if (result)
                res.status(200).json(result)
            else
                throw new Error().message = 'Failed to create hotel'
        } catch (error) {
            res.status(500).send({
                message: error.message || 'Some error occurred while creating the Hotel.'
            })
        }
    },
    update: async (req, res) => {
        try {
            if (!req.params.id && !req.body) {
                return res.status(400).json({ message: 'Please provide valid data' })
            }
            const result = await HotelService.update(req.params.id, req.body)
            if (result)
                res.status(200).json(result)
            else
                throw new Error().message = 'Failed to update hotel'
        } catch (error) {
            res.status(500).send({
                message: error.message || 'Some error occurred while updating the Hotel.'
            })
        }
    },
    getById: (req, res) => {

    },
    getAll: (req, res) => {

    }
}