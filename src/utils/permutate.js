const permute = require('email-permutator');

const splice = async (item, splice) => {return await item.split(' ')}

const permutate = async (first, last, domain) => {

    return await permute({    
        firstName: first,
        lastName: last,
        nickName:'',
        middleName:'',
        domain1: domain.substring(1),
        domain2:'',
        domain3:'',
      });


}

exports.splice = splice
exports.permutate = permutate