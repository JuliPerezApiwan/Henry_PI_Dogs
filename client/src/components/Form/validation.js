const validation = (form) => {
    let errors = {};

    if(!form.name){
        errors.name = "Este campo no puede estar vacío";
    // }
    // if(userData.username.length > 35){
    //     errors.username = "El email no puede superar los 35 caracteres";
    // }
    // if(!userData.password.match(/\d/)){
    //     errors.password = "La contraseña debe contener al menos un número";
    // }
    // if(userData.password.length < 6 || userData.password.length > 10){
    //     errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
    // }
    }
    return errors;
}

export default validation;