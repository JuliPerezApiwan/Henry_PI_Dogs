const { Temperament } = require('../../db.js');
const { Dog } = require('../../db.js');
const { getApiData, getDbData } = require('./saveApiData.js');

 // cantidad de razas en la db, ultimo id
const postDog = async (image, name, height, weight, life_span, temperamentID) => {
  const allDogsApi = await getApiData();
  const allDogsDb = await getDbData()
  const allDogs = allDogsApi.concat(allDogsDb)

const id = allDogs.length 
console.log(id)
 if (!image || !name || !height || !weight || !life_span || !temperamentID) throw new Error('Me falta informacion');

  const validate = await Dog.findOne({
    where: {
      name : name
    }
  })
 
  if (validate) throw new Error ('La raza ya existe');
  if(!validate) {
    const newRaza = await Dog.create({
        id: id + 1,
        image: image ? image : "https://www.kindpng.com/picc/m/139-1396987_clip-art-cats-and-dogs-dibujos-de-perros.png",
        name: (name.charAt(0)).toUpperCase() + name.slice(1) ,
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
         