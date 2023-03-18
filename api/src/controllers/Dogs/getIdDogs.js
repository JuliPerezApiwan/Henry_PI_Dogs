const { Dog } = require('../../db.js')
const { Temperament } = require ('../../db.js')

const getIdDogs = async(id) => {
    try {
        const dog = await Dog.findByPk(id);
        const temp = await Temperament.findByPk(id)

        const res = await temp.addDogs(dog)

        const findId = {
            id: dog.id,
            image: dog.image,
            name: dog.name,
            height: dog.height,
            weight: dog.weight,
            life_span: dog.life_span,
            temperaments: temp.name

        }
        // console.log(findId)
      
        return findId
    } catch (error) {
        return ({error:error.message})
    }
};

module.exports = {
    getIdDogs
}