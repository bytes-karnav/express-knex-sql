const PackageService = require('../services/package.services');
const packageValidator = require("../validators/package.validator");

module.exports = {
    create: async(req,res) => {
        const status = packageValidator.createPackage.validate(req.body).error;
        if(status) {
            return res.status(400).json({
                result: "error",
                status: false,
                message: 'Please provide valid data' ,
              });
        }
        const result = await PackageService.create(req.body)
        if (result.rowCount > 0)
            res.status(200).json({
                message: 'Package Created Successfully'
            })
        else
            throw new Error().message = 'Failed to create Package'
    },
    update: async (req,res) => {
        if(!req.params.id && !req.body) {
            return res.status(400).json({ status: 400, message: 'Please provide valid data'})
        }
        const result = await PackageService.update(req.params.id, req.body);
        if (result)
            res.status(200).json({status: 200, message: 'Package edited successfully'})
        else
            throw new Error().message = 'Failed to update package'
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