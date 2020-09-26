const crypto = require('crypto');


const helpers = {};


//Hashing the Password for new User
helpers.hash = (str) => {
    if (typeof(str) === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
        return hash;
    } else {
        return false;
    }
}




module.exports = helpers;