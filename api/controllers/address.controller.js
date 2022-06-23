const AddressService = require('../services/address.services')

module.exports = {
    create: async (req, res) => {
        try {
            const { street, city, state, zip, country, fk_user_id, fk_hotel_id } = req.body
            if (!street && !city && !state && !zip && !country) {
                return res.status(400).json({ message: 'Please provide valid data' })
            }
            if (!fk_user_id || !fk_hotel_id) {
                return res.status(400).json({ message: 'Please provide valid id of user/hotel' })
            }
            const result = await AddressService.create(req.body)
            if (result) {
                if (fk_user_id) {
                    await AddressService.createUserAddressMapping(fk_user_id, result.id)
                }
                if (fk_hotel_id) {
                    await AddressService.createHotelAddressMapping(fk_hotel_id, result.id)
                }
                return res.status(200).json('Address created successfully')
            } else
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
            const result = await AddressService.update(req.params.id, req.body)
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
    getById: async (req, res) => {
        try {
            if (!req.params.id) {
                return res.status(400).json({ message: 'Please provide valid id' })
            }
            const result = await AddressService.getById(req.params.id)
            if (result)
                res.status(200).json({ data: result })
            else
                throw new Error().message = 'Failed to get address'
        } catch (error) {
            res.status(500).send({
                message: error.message || 'Some error occurred while getting the Address.'
            })
        }
    },
    getAll: {

    }
}