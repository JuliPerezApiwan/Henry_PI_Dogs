const axios = require('axios');
const { Temperament } = require('../../db');
const { MY_API_KEY } = process.env

const getApiDataTemperaments = async () => {
    try {
    let temperamets = []

    let apiDataTemperamets = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`);
    temperamets.push(apiDataTemperamets);

    temperamets = (await Promise.all(temperamets)).map((c) => c.data.map((res) => {
        return {
            id: res.id,
            name: res.temperament
        }
    }))

    let allTemperaments = [];
    
    temperamets.map((c) => {
        allTemperaments = allTemperaments.concat(c)
    });

    return allTemperaments;
    } catch (error) {
    return { error: error.message };
    }
   
};

const saveApiDataTemperaments = async () => {
    try {
        
    const allTemperaments = await getApiDataTemperaments();
    //console.log(allTemperaments)
    
    await Temperament.bulkCreate(allTemperaments);
    
    return allTemperaments
    } catch (error) {
    return { error: error.message };
    }
}


   


module.exports = {
    getApiDataTemperaments,
    saveApiDataTemperaments,

}
