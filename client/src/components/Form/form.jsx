import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addDog, getAllDogs, getAllTemperaments } from '../../redux/actions';
import style from '../Form/form.module.css';
import { Link } from 'react-router-dom';
//import validation from './validation';
const Form = () => {
    const allDogs = useSelector((state) => state.allDogs);
    const [dogs, setdogs ] = useState(allDogs)
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

    // const [errors, setErrors] = useState({
    //     name: '',
    //     height: '',
    //     weight: '',
    //     life_span:'',
    //     temperaments:''
    // })
   //max height
 //min
 //max weight
 //min 

 //const maxHeight = temperaments.
 
  
  
    const handleChange = (event) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    //   setErrors(validation({
    //     ...form,
    //     [event.target.name]: event.target.value
    // }))
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(addDog(form));
      //alert('Raza creada');
    };
  
    const handleSelectTemperaments = (e) => {
      setForm({
        ...form,
        temperamentID : form.temperamentID.concat(e.target.value),
      });
    };
  
    
    useEffect(() => {
      dispatch(getAllDogs());
      dispatch(getAllTemperaments());
    }, []);
  
    return (
    
      <div className={style.div}>
        <form className={style.form} onSubmit={handleSubmit}>
          <Link to="/home" className={style.btn_home}>
            <button>Home</button>
          </Link>
          <div className={style.container}>
            <h2>Add Dogs Form</h2>
            <label>Image:</label>
            <input type="text" autoComplete="off" value={form.image} name="image" placeholder="Image URL..." onChange={handleChange}/>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              ></input> 
             
            </label>
  
            <label>
            Height:
              <input
                type="text"
                name="height"
                value={form.height}
                onChange={handleChange}
                placeholder='Min height - Max height'
              ></input>
            </label>
  
            <label>
            Weight:
            <input
                type="text"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                placeholder='Min weight - Max weight'
              ></input>
              <p>metric</p>
            </label>
  
            <label>
            Life Span:
              <input
                type="text"
                name="life_span"
                value={form.life_span}
                onChange={handleChange}
              />
              <p>years</p>
            </label>
  
            <label>
            Temperaments:
            <select
              className="select"
              name="temperaments"
              onChange={handleSelectTemperaments}
              value={form.id}
            >
              <option>Temperaments</option>
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
  
  //const filterCountries = countries.filter((e) => e.name === [activities].ubication)
  //? filterCountries.activities.push([activities])
  // : new Error ('el pais no existe')
  
  export default connect(null, dispatchDog)(Form);
  