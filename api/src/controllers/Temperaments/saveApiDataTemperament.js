const axios = require('axios');
const { Temperament } = require('../../db');
const { MY_API_KEY } = process.env

const getApiDataTemperaments = async () => {
    try {
    let temperaments = []

    let apiDataTemperaments = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`);
    temperaments.push(apiDataTemperaments);

    temperaments = (await Promise.all(temperaments)).map((c) => c.data.map((res) => {
        return {
            id: res.id,
            name: res.temperament
        }
    }))

    let allTemperaments = [];
    
    temperaments.map((c) => {
        allTemperaments = allTemperaments.concat(c)
    });
    //console.log(allTemperaments)

    return allTemperaments;
    } catch (error) {
    return { error: error.message };
    }
   
};

const saveApiDataTemperaments = async () => {
    try {
        
    let allTemperaments = await getApiDataTemperaments();
    let unicos = []
    allTemperaments = allTemperaments.map((e) => e.name ? e.name.split(", ") : '') 
    //console.log(allTemperaments)
    allTemperaments.filter((e) => {
        
    for(var i = 0; i < e.length; i++) {
     
    const elemento = e[i];
    let id = unicos.length + 1
    if (!unicos.includes(elemento)) {
        unicos.push({
            id:id,
            name:elemento
        }) 
      }
    }  
    })
    
    console.log(unicos)
    await Temperament.bulkCreate(unicos);
    return unicos
    } catch (error) {
    return { error: error.message };
    }
}


   


module.exports = {
    getApiDataTemperaments,
    saveApiDataTemperaments,

}
