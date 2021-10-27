const { verify } = require('../helpers/jwt');
const { User } = require('../models')

const authentication = async(req, res, next) => {
    const token = req.headers.access_token

    try {
        if (token == null) {
            throw ({
                name: "AUTHERROR",
                status: 401,
                msg: "Not Logged In"
            })
        }
        const payload = verify(token)

        console.log(payload)

        req.user = {
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role
        }
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authentication;