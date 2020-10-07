const db = require('./utils/dbconnect');
const ax = require('./utils/axios');

async function StoreIntoDB(){
    var data;
    var ab_scores = await ax('get','https://www.dnd5eapi.co/api/ability-scores');
    ab_scores = ab_scores.results;  // array of ability socres

    try{
        //loop to grap link for each ability score, fetch data, and insert into db
        for(var i=0; i < ab_scores.length; i++){
            var score = await ax('get', 'https://www.dnd5eapi.co'+ab_scores[i].url);
            
            db.query(`INSERT INTO abilityscores SET fullname = ?, name = ?, abbreviation = ?, description = ?`,[score.full_name, score.name, score.index, score.desc.join(' / ')]);

            data = true;
        }
    }
    catch(err){
        console.log(err.message);
        data = false;
    }

    return data;
}

module.exports = {
    StoreIntoDB:StoreIntoDB
}