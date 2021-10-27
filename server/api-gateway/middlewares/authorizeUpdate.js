const authorizeUpdate = async(req, res, next) => {
    try {
        const { permissions } = req.currentUser;

        if (!permissions.includes("update")) {
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

module.exports = authorizeUpdate;