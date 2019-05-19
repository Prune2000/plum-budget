const configValues = require('./config');

module.exports = {

    getDbConnectionString: () => {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0-0hin2.mongodb.net/test?retryWrites=true`;
    }

};