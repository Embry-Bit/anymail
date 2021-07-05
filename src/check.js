const axios = require('axios');
const permute = require('email-permutator');
const fetch = require('node-fetch')
require('dotenv').config()



const validate = async (email) => {

    return await fetch('https://emailvalidation.abstractapi.com/v1/?api_key='+process.env.TOKEN+'&email='+email, {
    })
    .then((res) => { 
        status = res.status; 
        return res.json() 
      }) 
    
    }






const permutate = async (email) => {

    permute({    
        firstName:'john',
        lastName:'doe',
        nickName:'',
        middleName:'',
        domain1:'gmail.com',
        domain2:'',
        domain3:'',
      });

}


// validate('embry.ga@gmail.com')

exports.validate = validate
