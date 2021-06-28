const axios = require('axios');
const permute = require('email-permutator');
const fetch = require('node-fetch')


// const validate = async (email) => {

// axios.get('https://emailvalidation.abstractapi.com/v1/?api_key=85cc83580ab34412ab85f31752670f99&email='+email)
//     .then(response => {
//         // console.log(response.data);
//         return response.data
//     })
//     .catch(error => {
//         console.log(error);
//     });

// }




const validate = async (email) => {

    return await fetch('https://emailvalidation.abstractapi.com/v1/?api_key=85cc83580ab34412ab85f31752670f99&email='+email, {
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