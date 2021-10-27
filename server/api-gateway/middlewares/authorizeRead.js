const authorizeRead = async(req, res, next) => {
    try {
        const { permissions } = req.currentUser;
        // console.log(permissions)
        if (!permissions.includes("read")) {
            throw {
                name: 'FORBIDDEN',
                status: 403,
                msg: 'Not Authorized to do that',
            };
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

module.exports = authorizeRead;