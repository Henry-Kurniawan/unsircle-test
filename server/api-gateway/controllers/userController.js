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

            let userLogin = await axios({
                method: "POST",
                url: `${BASE_URL_USERS}/users/login`,
                data: payload
            });

            const access_token = sign({
                id: userLogin.id,
                email: userLogin.email,
                name: userLogin.name,
                permissions: userLogin.permissions
            })

            const result = {
                access_token,
                id: userLogin.id,
                email: userLogin.email,
                name: userLogin.name,
            }

            res.status(200).json(result)

        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController