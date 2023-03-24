import { useParams } from 'react-router-dom'; // ME PERMITE TRAER LAS PROPIEDADES, ME RETORNA UN OBJETO
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs, getDogDetail } from '../../redux/actions';
//import { cleanCountryDetail } from '../../redux/actions';
import style from '../DogDetail/dogDetail.module.css';
import NavBar from '../NavBar/navBar';


const DogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, image, height, weight, life_span, temperament, Temperaments} = useSelector((state) => state.dogDetail);
  
 
 

  useEffect(() => {
    dispatch(getDogDetail(id));
    //return () => dispatch(cleanCountryDetail()) // que cuando se demonte me limpie countryDetail
  }, []);


        return (
           
        <div className={style.dogDetail}>
             <Link to="/home" className={style.btn_detail}>BACK</Link>
        <div className={style.container}>
          <img src={image} alt={name} />
            <h1>{name}</h1>


          <div className={style.dogDetail_data}>
            <h3>Height:</h3> <p>{height}</p>
            <h3>Weight:</h3> <p>{weight}</p>
            <h3>Life Span:</h3> <p>{life_span}</p>
            <h3>Temperaments:</h3> <p>{temperament !== undefined?temperament: Temperaments.map((e) => e.name)}</p>
          </div>
        </div>
      </div>
    );
    
  

};

export default DogDetail;