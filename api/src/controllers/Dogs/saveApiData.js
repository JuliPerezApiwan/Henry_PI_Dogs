const axios = require('axios');
const { Dog, Temperament } = require('../../db');
const { MY_API_KEY } = process.env

const getApiData = async () => {
    try {
    let dogs = []

    let apiData = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`);
    dogs.push(apiData);
    

    dogs = (await Promise.all(dogs)).map((c) => c.data.map((res) => {
        //if(res.image.includes('http') ? c.image.url :('no tiene img'))
//        


        return {
            id: res.id,
            image: res.image.url,
            name: res.name,
            height: res.height.metric,
            weight: res.weight.metric,
            life_span: res.life_span,
            temperament:res.temperament
            
        }
    }))
   
    let allDogs = [];
    dogs.map((c) => {
        allDogs = allDogs.concat(c)
    });
    

    
    // allDogs.map((e) => {
    //     let heightArray = [];
    //             if (e.height) {
    //                 heightArray = e.height.split(" - ");
    //             }
    //             heightArray.forEach((c) => {heightArray = c})
            
    //     let weightArray = [];
    //             if (e.weight) {
    //                 weightArray = e.weight.split(" - ");
    //                 weightArray.forEach((c) => {weightArray = c})
    //             }
                

    //     console.log(Math.max(heightArray))
    // })
   

//console.log(heightArray)

     //console.log(allDogs)
    return allDogs;
    } catch (error) {
    return { error: error.message };
    }
   
};

const getDbData = async () => {
    const res = Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'], //atributos que quiero traer del modelo Temperament, el id lo trae automatico
        }
        
    })
    return res
}

// const saveApiData = async () => {
//     try {
        
//     const allDogs = await getApiData();
    
//     await Dog.bulkCreate(allDogs);
//     //console.log(allDogs)
//     return allDogs
//     } catch (error) {
//     return { error: error.message };
//     }
// }
   



module.exports = {
    getApiData,
    getDbData,
}


// -  ID.\*
// -  Imagen.\*
// -  Nombre.\*
// -  Altura.\*
// -  Peso.\*
// -  Años de vida.\*