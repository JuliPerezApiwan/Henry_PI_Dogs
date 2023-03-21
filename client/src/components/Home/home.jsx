import style from '../Home/home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getAllDogs,
  orderDogs,
  orderbyWeight, 
  filterbyTemperaments,
  getAllTemperaments
} from '../../redux/actions'
import DogCard from '../DogCard/dogCard';
import Pagination from '../Pagination/pagination';

export const Home = () => {
const dispatch = useDispatch();
const allDogs = useSelector((state) => state.allDogs)
const allTemperaments = useSelector((state) => state.allTemperaments)
//console.log(allDogs)
const [order, setOrder] = useState();


const [currentPage, setCurrentPage] = useState(1)
const [dogsPerPage, setDogsPerPage] = useState(8)
const max = Math.round(allDogs.length / dogsPerPage)

const handlerOrder = (event) => {
    event.preventDefault();
    dispatch(orderDogs(event.target.value));
    setOrder(event.target.value);
  };

const handlerOrderbyWeight = (event) => {
    event.preventDefault();
    dispatch(orderbyWeight(event.target.value));
    setOrder(event.target.value);
  };

const handlerFilterbyTemperament = (event) => {
    event.preventDefault();
    dispatch(filterbyTemperaments(event.target.value));
    setOrder(event.target.value);
  };

useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments())
}, [dispatch])


   return (
    <div className={style.home}>
        <h1>HOME</h1>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />

        <select onChange={handlerOrder} className={style.filters}>
        <option value="All">Order By Name</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        </select>

        <select onChange={handlerOrderbyWeight} className={style.filters}>
        <option value="All">Order By Weight</option>
        <option value="higher-weight">Higher Weigh</option>
        <option value="lower-weight">Lower Weigh</option>
        </select>

        <select onChange={handlerFilterbyTemperament} className={style.filters}>
        <option value="Filter-by-Temperaments">Filter By Temperaments</option>
        <option value="All" key="All">
          All
        </option>
        {allTemperaments.map((e) => (
          <option value={e.name} key={e.name}>
            {e.name}
          </option>
        ))}
      </select>


        <div className={style.cards}> 
        {allDogs.slice(
              (currentPage - 1) * dogsPerPage,
              (currentPage - 1) * dogsPerPage + dogsPerPage
            ).map((c) => {
                return (
                <DogCard
                key={c.id}
                name={c.name}
                image={c.image.url}
                weight={c.weight}
                temperament={c.temperament}
                />
                )
            })
        }
        </div>
      
   
        
       

    
    </div>
   )
}

export default Home;