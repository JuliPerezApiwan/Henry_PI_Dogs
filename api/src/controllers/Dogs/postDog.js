const { Temperament } = require('../../db.js');
const { Dog } = require('../../db.js');

let id = 280 // cantidad de razas en la db, ultimo id
const postDog = async (image, name, height, weight, life_span, temperamentID) => {

 if (!image || !name || !height || !weight || !life_span || !temperamentID) throw new Error('Me falta informacion');

  const validate = await Dog.findOne({
    where: {
      name : name
    }
  })
 console.log(Dog)
  if (validate) throw new Error ('La raza ya existe');
  if(!validate) {
    const newRaza = await Dog.create({
        id: id++,
        image,
        name,
        height,
        weight,
        life_span,
    })
   

    const temp = await Temperament.findOne({
        where: {
            id : temperamentID
        }
    })
    
    const res = await temp.addDogs(newRaza)
    
return ("Raza creada correctamente");
  }
};

module.exports = {
  postDog,
};
         