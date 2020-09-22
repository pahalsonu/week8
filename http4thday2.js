/*
1. this file contatins whole config varibales


*/
const environments = {};
//default or pre production enviorements
environments.staging = {
    'httpPort' : 3000,
    'httpsPort' : 3001,
    'envName' : 'staging'
}
//production enviorements
 environments.production = {
     'httPort' : 5000,
     'httpsPort' : 5001,
     'envName' : 'production'
 }

 console.log(process.env.PORT)
//decide which enviorement to be exported
const currentEnviorment = typeof (process.env.NODE_ENV) === 'string'? process.env.NODE_ENV.toLowerCase() : '';

//check that the current Enviorment is one of the enviorments above, if not we can default to staging mode
 const enviormentToExport = typeof (environments[currentEnviorment])=== 'object' ? environments[currentEnviorment] : environments.staging;
module.exports = environments;
