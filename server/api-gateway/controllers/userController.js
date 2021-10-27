const axios = require('axios');
const { sign } = require('../helpers/jwt')

const BASE_URL_USERS = "http://localhost:4001";


class UserController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const payload = {
                email,
                password
            };

            let { data } = await axios({
                method: "POST",
                url: `${BASE_URL_USERS}/users/login`,
                data: payload
            });

            const access_token = sign({
                id: data.id,
                email: data.email,
                name: data.name,
                permissions: data.permissions
            });

            const result = {
                access_token,
                id: data.id,
                email: data.email,
                name: data.name,
                permissions: data.permissions
            };

            res.status(200).json(result);

        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController