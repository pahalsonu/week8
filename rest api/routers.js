const { type } = require('os');
const fileSystem = require('./data')
const helpers = require('./helpers');
const handlers = {};


handlers.users = (data, callback) => {
    const acceptableMethods = ['post', 'get', 'put', 'delete'];

    if (acceptableMethods.indexOf(data.method) > -1) {
        handlers._users[data.method](data, callback);

    } else {
        callback(405, { 'error': "invalid http method. request failed" });
    }
}

handlers._users = {};

handlers._users.post = (data, callback) => {
    data.payload = JSON.parse(data.payload);

    data.firstName = typeof(data.payload.firstName) === 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
    data.lastName = typeof(data.payload.lastName) === 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
    data.phone = typeof(data.payload.phone) === 'string' && data.payload.phone.length > 10 ? data.payload.phone : false;
    data.email = typeof(data.payload.email) === 'string' && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;
    data.terms = typeof(data.payload.terms) === 'string' && data.payload.terms.trims === true ? true : false;
    data.password = typeof(data.payload.password) === 'string' && data.payload.password.trim().length > 8 ? data.payload.password : false;
    data.id = typeof(data.payload.id) === 'string' && data.payload.id.trim().length > 0 ? data.payload.id.trim() : false;
    if (firstName && lastName && phone && term && emai && password && terms) {

        fileSystem.read('users', phone, (err, data) => {
            if (err) {
                const hashedPassword = helpers.hash(password)

                if (hashedPassword) {
                    const userObject = {
                        'firstName': firstName,
                        'lastName': lastName,
                        'phone': phone,
                        'email': email,
                        'hashedPassword': hashedPassword,
                        'terms': true,
                        'id': id
                    }
                    fileSystem.create('users', phone, userObject, (err) => {
                        if (!err) {
                            callback(200, { "sucess": "User Registered Successfully" })

                        } else {
                            callback('new user not created')
                        }
                    })
                } else {
                    callback('hasing not done')
                }

            } else {
                callback('file already exist');
            }
        })

    }



}

handlers.notFound = (data, callback) => {
    callback(404, { "staus": "not found" });
}

module.exports = handlers