var ax = require('../utils/axios');
var expect = require('expect.js');

describe('Api test', ()=>{
    var result;
    it('Should be an array ', async()=>{
        result = await ax('get','https://www.dnd5eapi.co/api/ability-scores');
        expect(result.results).to.be.a(Array);
    });

    it('Should not be empty ', async()=>{
        result = await ax('get','https://www.dnd5eapi.co/api/ability-scores');
        expect(result.results).to.not.be.empty();
    });

    it('Should be an object with the keys', async()=>{
        result = await ax('get','https://www.dnd5eapi.co/api/ability-scores');
        for(var i=0; i<result.results.length; i++){
            expect(result.results[i]).to.have.keys('index','name','url');
        }
    });

    it('Should be an object', async()=>{
        result = await ax('get','https://www.dnd5eapi.co/api/ability-scores');
        for(var x=0; x<result.results.length; x++){
            var subResult = await ax('get', 'https://www.dnd5eapi.co'+result.results[x].url);
            expect(subResult).to.be.a(Object);
        }
    });
    
    it('Should have the keys', async()=>{
        result = await ax('get','https://www.dnd5eapi.co/api/ability-scores');
        for(var x=0; x<result.results.length; x++){
            var subResult = await ax('get', 'https://www.dnd5eapi.co'+result.results[x].url);
            expect(subResult).to.have.keys('index','name','full_name','desc');
        }
    });

});
