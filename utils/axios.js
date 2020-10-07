const axios = require('axios');

module.exports = async (type, link, data) => {
    let response;
    if(type === 'get'){
        try{
            response = await axios(link);
        }
        catch(err){
            console.log(err.message);
            response = false;
        }
    }
    else if(type === 'post'){
        try{
            response = await axios.post(link, data);
        }
        catch(err){
            console.log(err.message);
            response = false;
        }
    }
    
    return response.data;
}