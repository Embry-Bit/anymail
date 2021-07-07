const permutate = require('../utils/permutate');
const validate = require('../utils/validate')
const assert = require('chai').assert;


// checks emails 
describe('Permutate', function(){
    it('Permutate should return list of permutated emails', async function() {
        const result = await permutate.permutate('test', 'name', '@email.com')
        assert.equal(result.length, 34 )
    });

    // check string in array
    it('Permutate should be a list/string', async function() {
        const resultString = await permutate.permutate('test', 'name', '@email.com')
        assert.typeOf(resultString[1], 'string')
    });

    // checks string in array
    it('Permutate should be above 30s', async function() {
        const resultString = await permutate.permutate('test', 'name', '@email.com')
        assert.isAbove(resultString.length, 30)
    });

})

// checks email that exists
describe('ValidateExist', function(){
    it('ValidateExist should return list of permutated emails', async function() {
        const result = await validate.validate('itsdotsa@gmail.com')
        assert.equal(result.length, 11 )
    });

    it('ValidateNotExist should return list of permutated emails', async function() {
        const result = await validate.validate('doesNotExist@email.com')
        assert.equal(result.length, 1 )
    });

})


