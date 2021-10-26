const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


function encode(password) {
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function decode(password, haspass) {
    return bcrypt.compareSync(password, haspass); // true
}

module.exports = { encode, decode }