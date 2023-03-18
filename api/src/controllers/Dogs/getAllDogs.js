const { Dog } = require ('../../db.js')
const { Temperament } = require ('../../db.js')

const getAllDogs = async () => {
    try {
        const allDogs = await Dog.findAll();
        
        return allDogs;


    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    getAllDogs
}