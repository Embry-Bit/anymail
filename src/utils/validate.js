const fetch = require('node-fetch')
require('dotenv').config()



const validate = async (email) => {

    const response = await fetch('https://emailvalidation.abstractapi.com/v1/?api_key=' + process.env.API_TOKEN + '&email=' + email, {
        headers: {
            'Accept': 'application/json'
        }
    });
    return await response.json();

}



exports.validate = validate