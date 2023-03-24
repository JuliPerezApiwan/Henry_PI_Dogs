import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDogs, getDogsName, getAllTemperaments } from '../../redux/actions';
import style from '../Search/search.module.css';
import { Link } from 'react-router-dom';
import Home from '../Home/home';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
  
    function handleInputChange(e) {
      e.preventDefault();
      setName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(getDogsName(name));
      setName(e.target.value);
    }
  
    useEffect(() => {
      dispatch(getAllDogs());
      
    }, [dispatch]);

    return (
        <div className={style.search}>
        
          <input
            className="input"
            value={name}
            type="text"
            placeholder="Search here..."
            onChange={handleInputChange}
          />
    
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
      );
}

export default SearchBar

