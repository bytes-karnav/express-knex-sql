const UserService = require('../services/user.services')

module.exports = {
    getAllUsers: (req, res) => {
        UserService.getAllUsers().then(result => {
            res.status(200).json(result)
        }).catch(err => {
            res.status(500).json(err)
        })

    }
}