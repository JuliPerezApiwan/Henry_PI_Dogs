import { Link } from "react-router-dom";


const dogCard = ({id, name, image, temperaments, weight }) => {
    return(
        <div>
            <img src={image} alt={name} />

            <Link to={`/detail/${id}`} ><h2>{name}</h2></Link>
            
            <h3>{temperaments}</h3>
            <h3>{weight}</h3>
        </div>
    )
}

export default dogCard;