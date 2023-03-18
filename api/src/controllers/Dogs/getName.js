const { Dog } = require('../../db.js');

const getName = async (name) => {
  if (!name) throw new Error('No tengo raza para buscar');

if(name.charAt(0) === name.charAt(0).toUpperCase()){
    if(name.charAt(1) === name.charAt(1).toUpperCase()){
        name = name.toLowerCase() 
        name = (name.charAt(0)).toUpperCase() + name.slice(1)
    }
  
}
if(name.charAt(0) === name.charAt(0).toLowerCase()){
    name = (name.charAt(0)).toUpperCase() + name.slice(1)
}
    // todo minus
    
    console.log(name)


    const result = await Dog.findOne({
    where: {
      name: name
    },
  });

  if (!result) throw new Error('No tengo la raza que ingresaste');
  else return result;
};

module.exports = {
  getName,
};

//no me valida con espacios, funcion para que te los elimine