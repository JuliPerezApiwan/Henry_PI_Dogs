const { Dog } = require('../../db.js')
const { Temperament } = require ('../../db.js');
const { getApiData, getDbData } = require('./saveApiData.js');

const getIdDogs = async(id) => {
    try {
        const allDogsApi = await getApiData();
        //console.log(allDogsApi)
        const result = allDogsApi.filter((e) => e.id == id)
        
        if(result.length) {
        console.log(result)
        return result
        } else {
            const allDogsDb = await getDbData()
            const dog = allDogsDb.find((e) => e.id === id)
            //console.log(dog)
        return dog
        }


        
    } catch (error) {
        return ({error:error.message})
    }
};

module.exports = {
    getIdDogs
}