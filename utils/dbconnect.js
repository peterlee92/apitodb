var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'livestock'
});

let exp = {
    query:async (q, d) => {
        try{
            var result = connection.query(q,d);
        }
        catch(err){
            throw err;
        }
        return result;
    }
}

module.exports = exp;