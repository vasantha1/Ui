const mocha=require('mocha');
const assert=require('assert');

//describe tests
describe('some demo tests',function(){
    
    //create tests
    it('adds two numbers together',function(){
        assert(2+4===5);
    });
});