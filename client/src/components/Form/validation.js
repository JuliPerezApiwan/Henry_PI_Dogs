
    const validate = (form) => {
        let errors = {}
        if(!form.name) {
            errors.name = 'Name is required'
        } 
        
        if(!form.height) {
            errors.height = "Height is required, type only numbers separated by a dash (-)"
        }
        if(!form.weight) {
            errors.weight = "Weight is required, type only numbers separated by a dash (-)"
        }
        if(!form.life_span) {
            errors.life_span = 'Lifespan is required'
        }
        return errors
    }
//       //name
//   let errors = {};
//   if(!form.name) {
//     errors.name = 'debes ponerle un nombre'
//   } else if(!/[A-Z]+$/i.test(form.name)) {
//     errors.name = 'solo puede contener letras'
//   } else if(parseInt(form.name.length) >= 25) {
//     errors.name= 'debe contener menos de 25 caracteres'
//   }
//   // /^[A-Z]+$/i

//   //height
//   if(!form.height_max) {
//     errors.height_max = "altura max requerida"
//   } else if(parseInt(form.height_max) > 85) {
//     errors.height_max = 'debe ser menor a 85 CM' 
//   } else if(!/^[0-9]+$/.test(form.height_max)) {
//     errors.height_max = 'solo puede contener numeros'
//   }

//   //agregar a los otros inputs

//   if(!form.height_min) {
//     errors.height_min = 'altura min requerida'
//   } else if(parseInt(form.height_min) >= parseInt(form.height_max)) {
//     errors.height_min = 'debe ser menor al max'
//   } else if(!/^[0-9]+$/.test(form.height_min)) {
//     errors.height_min = 'solo puede contener numeros'
//   }


//   //weight  
//   if(!form.weight_max) {
//     errors.weight_max = "peso max requerido"
//   } else if(parseInt(form.weight_max) > 90) {
//     errors.weight_max = 'debe ser menor a 90 KG'
//   } else if(!/^[0-9]+$/.test(form.weight_max)) {
//     errors.weight_max = 'solo puede contener numeros'
//   }

//   if(!form.weight_min) {
//     errors.weight_min = 'peso min requerido'
//   } else if(parseInt(form.weight_min) >= parseInt(form.weight_max)) {
//     errors.weight_min= 'debe ser menor al max'
//   }


//   //life_span
//   if(parseInt(form.life_span_max) > 20) {
//     errors.life_span_max = 'debe ser menor a 20 Años'
//   } else if(!/^[0-9]+$/.test(form.life_span_max)) {
//     errors.life_span_max = 'solo puede contener numeros'
//   }
  
//   if(parseInt(form.life_span_min) >= parseInt(form.life_span_max)) {
//     errors.life_span_min = 'debe ser menor al max'
//   } else if(!/^[0-9]+$/.test(form.life_span_min)) {
//     errors.life_span_min = 'solo puede contener numeros'
//   }

//   return errors;
// }

export default validate;