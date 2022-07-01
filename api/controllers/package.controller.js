const PackageService = require('../services/package.services');
const packageValidator = require("../validators/package.validator");

module.exports = {
    create: async(req,res) => {
        const status = packageValidator.createPackage.validate(req.body);
        console.log('here -------------------------------',status, req.body);

        

    },
   
    getAll: async (req, res) => {
        console.log('here in get all package');
        await PackageService.getAll().then(result => {
            res.status(200).json(result)
        }).catch(err => {
            res.status(500).json(err)
        })
    },
    getById: async (req,res) => {
        if(!Number(req.params.id)) {
            return res.status(400).json({msg: 'Please provide valid'})
        }
        await PackageService.getById(req.params.id).then(res => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(500).json(err);
        })
    }
}