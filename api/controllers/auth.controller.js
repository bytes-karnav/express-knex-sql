
const { register, validateEmail, activateEMail, hashPassword, validatePassword, signJWT } = require('../services/auth.services')

module.exports = {
    register: async (req, res) => {
        try {
            const [emailDetails] = await validateEmail(req.body.email)
            if (!!emailDetails) {
                if (emailDetails.deletedAt === null)
                    return res.status(409).json({ message: 'Email already exists' });

                if (emailDetails.deletedAt !== null) {
                    let result = await activateEMail(req.body.email);
                    if (result === 1)
                        return res.status(200).send({ message: 'User registered successfully' })
                    else
                        throw new Error().message = 'Something went wrong on server side'
                }
            }

            req.body.password = await hashPassword(req.body.password);

            const result = await register(req.body);
            if (result) {
                res.status(200).send({ message: 'User registered successfully' });
            } else
                throw new Error().message = 'Something went wrong on server side'
        } catch (error) {
            return res.status(500).json(error.message || error)
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw new Error().message = 'Invalid email or password'
            }
            const [emailDetails] = await validateEmail(email);
            if (!emailDetails || emailDetails.deletedAt !== null) {
                throw new Error().message = 'Invalid email or password'
            }

            isPasswordValid = await validatePassword(password, emailDetails.password)
            delete emailDetails.password;

            if (!isPasswordValid) {
                throw new Error().message = 'Invalid email or password'
            }

            const { id, first_name, last_name } = emailDetails;
            const token = signJWT({ id, first_name, last_name })

            return res.status(200).json({ token, id, first_name, last_name })
        } catch (error) {
            return res.status(500).json(error.message || error)
        }
    },

}