const { verify } = require('../helpers/jwt');

const authentication = async(req, res, next) => {
    try {
        const token = req.headers.access_token
        if (token == null) {
            throw ({
                name: "AUTHERROR",
                status: 401,
                msg: "Not Logged In"
            })
        }
        const payload = verify(token)

        req.currentUser = {
            id: payload.id,
            email: payload.email,
            permissions: payload.permissions
        }
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authentication;