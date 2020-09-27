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
   
 

 firstName = typeof(data.payload.firstName) === 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;


 lastName = typeof(data.payload.lastName) === 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
 phone = typeof(data.payload.phone) === 'string' && data.payload.phone.length >= 10 ? data.payload.phone : false;
    // data.email = typeof(data.payload.email) === 'string' && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;
    terms = data.payload.terms === true ? true : false;
    password = typeof(data.payload.password) === 'string'   ? data.payload.password : false;
  
    // data.id = typeof(data.payload.id) === 'string' && data.payload.id.trim().length > 0 ? data.payload.id.trim() : false;
    if (firstName && lastName && phone && password && terms) {

        fileSystem.read('users', phone, (err, data) => {
            if (err) {
                const hashedPassword = helpers.hash(password)

                if (hashedPassword) {
                    const userObject = {
                        'firstName': firstName,
                        'lastName': lastName,
                        'phone': phone,
                       
                        'hashedPassword': hashedPassword,
                        'terms': true,
                        
                    }
                    fileSystem.create('users', phone, userObject, (err) => {
                        if (!err) {
                            callback(200, { "sucess": "User Registered Successfully" })

                        } else {
                            callback('new user not created')
                        }
                    })
                } else {
                    callback('hashing not done')
                }

            } else {
                callback('file already exist');
            }
        })

    } else {
        console.log('condtion not true')
    }



}

handlers.notFound = (data, callback) => {
    callback(404, { "staus": "not found" });
}

module.exports = handlers