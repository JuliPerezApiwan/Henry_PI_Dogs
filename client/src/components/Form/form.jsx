import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addDog, getAllDogs, getAllTemperaments } from '../../redux/actions';
import style from '../Form/form.module.css';
import { Link } from 'react-router-dom';
import validate from './validation';


const Form = () => {
    //const allDogs = useSelector((state) => state.allDogs);
    const allTemperaments = useSelector((state) => state.allTemperaments);
    const dispatch = useDispatch('');
    const [form, setForm] = useState({
        image: '',
        name:'',
        height:'',
        weight: '' ,
        life_span: '',
        temperamentID: '',
    });

    const [errors, setErrors] = useState({
        image: '',
        name:'',
        height:'',
        weight: '' ,
        life_span: '',
        temperamentID: '',
    })
   //max height
 //min
 //max weight
 //min 

 //const maxHeight = temperaments.
 
  
  
    const handleChange = (event) => {
       setForm ({
        ...form,
        [event.target.name]: event.target.value,
      });
      setErrors(validate({
        ...form,
         [event.target.name]: event.target.value
     }))
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
     dispatch(addDog(form));
     alert('Raza creada')
     if (form.name.length > 0 && form.height.length > 0 && form.weight.length > 0 && form.life_span.length > 0) 
     setForm({
        image: '',
        name:'',
        height:'',
        weight: '' ,
        life_span: '',
        temperamentID: '',
     })
     else {
        alert(errors.name || errors.height|| errors.weight || errors.life_span)
     }
    };
  
    const handleSelectTemperaments = (e) => {
      setForm({
        ...form,
        temperamentID : [...form.temperamentID,e.target.value],
      });
    };
  
    
    useEffect(() => {
      dispatch(getAllDogs());
      dispatch(getAllTemperaments());
    }, [dispatch]);
  
    return (
    
      <div className={style.div}>
        <form className={style.form} onSubmit={handleSubmit}>
          <Link to="/home" className={style.btn_home}>
            <button>Home</button>
          </Link>
          <div className={style.container}>
            <h2>Add Dogs Form</h2>
            <label>Image <input type="text" autoComplete="off" value={form.image} name="image" placeholder="Image URL..." onChange={handleChange}/>
            </label>
           

            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder='Name'
              ></input>
            </label>
  
            <label>
            Height
              <input
                type="text"
                name="height"
                value={form.height}
                onChange={handleChange}
                placeholder='Min height - Max height'
              ></input>
            </label>
  
            <label>
            Weight
            <input
                type="text"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                placeholder='Min weight - Max weight'
              ></input>
            </label>
  
            <label>
            Life Span
              <input
                type="text"
                name="life_span"
                value={form.life_span}
                onChange={handleChange}
                placeholder='Life Span'
              />
            </label>
  
            <label>
            Temperaments
            <select
              className="select"
              name="temperaments"
              onChange={handleSelectTemperaments}
              value={form.id}
            >
              <option>Select</option>
              {allTemperaments?.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </label>
            <div className={style.btn}>
              <button type="submit">Add Dog</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  const dispatchDog = (dispatch) => {
    return {
      addDog: (dog) => {dispatch(addDog(dog))},
    };
  };
  
  
  export default connect(null, dispatchDog)(Form);
  