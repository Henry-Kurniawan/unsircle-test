const { User, Permission } = require('../models');
const { decode } = require('../helpers/bcrypt');

class UserController {
    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            const findUser = await User.findOne({ 
                    where: { 
                        email 
                    },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    include: [{
                        model: Permission,
                        attributes: ['id', 'type']
                    }] 
                });

            if (findUser) {
                const validate = decode(password, findUser.password)

                if (validate) {
                    const data = {
                        id: findUser.id,
                        email: findUser.email,
                        name: findUser.name,
                        Permissions: findUser.Permissions
                    };
                    res.status(200).json(data);

                } else {
                    throw {
                        name: 'LOGINERROR',
                        status: 401,
                        msg: 'Email/Password is not valid'
                    }
                }
            } else {
                throw {
                    name: 'LOGINERROR',
                    status: 401,
                    msg: 'Email/Password is not valid'
                }
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController