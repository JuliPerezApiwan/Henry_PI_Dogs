
import { GET_ALL_DOGS, ORDER, ORDER_BYWEIGHT, FILTER_BYTEMPERAMENTS, GET_ALL_TEMPERAMENTS, FILTER_FROM_DOGS, GET_DOGS_NAME, GET_DOG_DETAIL, ADD_DOG} from './actions-types'

const initialState = {
    allDogs: [],
    dogs: [],
    orderDogs: [],
    allTemperaments: [],
    dogDetail: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_DOGS:
            return { 
            ...state,
            allDogs: action.payload,
            dogs:action.payload
        }
        case GET_ALL_TEMPERAMENTS:
            return { 
            ...state,
            allTemperaments: action.payload
        }

        
         case ORDER: 
            const orderDogs = 
            action.payload === 'All' || action.payload === 'A-Z' ? state.allDogs.sort(function (a,b) {
                if(a.name > b.name) {
                    return 1;
                  }
                  if (b.name > a.name) {
                    return -1;
                  }
                  return 0;
                })
              : state.allDogs.sort(function (a, b) {
                  if (a.name > b.name) {
                    return -1;
                  }
                  if (b.name > a.name) {
                    return 1;
                  }
                  return 0;
                });
            return {
                ...state,
                allDogs: orderDogs
            }   
        case ORDER_BYWEIGHT:
            const orderbyWeight =
            action.payload === 'All' ? state.allDogs.sort(function (a,b) {
                if(a.name > b.name) {
                    return 1;
                  }
                  if (b.name > a.name) {
                    return -1;
                  }
                  return 0;
                }) :
            action.payload === 'higher-weight' ? 
            state.allDogs.sort(function (a, b) {
                    if (a.weight > b.weight) {
                      return -1;
                    }
                    if (b.weight > a.weight) {
                      return 1;
                    }
                    return 0;
                  })
                :
                state.allDogs.sort(function (a, b) {
                    if (a.weight > b.weight) {
                      return 1;
                    }
                    if (b.weight > a.weight) {
                      return -1;
                    }
                    return 0;
                  }) 

              
            return {
              ...state,
              allDogs: orderbyWeight
            };
        
        case FILTER_BYTEMPERAMENTS:
                const allTemperaments = state.dogs
                const temperamentFilter =
                  action.payload === 'All' || action.payload === 'Filter-by-Temperaments'
                    ? allTemperaments
                    : allTemperaments.filter((i) => i.temperament === action.payload);
                return {
                  ...state,
                  allDogs: temperamentFilter,
                  
                };
        case FILTER_FROM_DOGS:
                const filter = action.payload === 'All' 
                ? state.dogs
                : (action.payload === 'db') ? 
            state.dogs.filter((i) => (i.createdAt)) 
            : state.dogs.filter((i) => (!(i.createdAt)))
                return {
                    ...state,
                    allDogs: filter, 
                    };
        case GET_DOGS_NAME:
            return {
                ...state,
                allDogs: action.payload,
                    };   
        case GET_DOG_DETAIL:
              return {
                ...state,
                dogDetail: action.payload,
                };
        case ADD_DOG:
                  
                  const newDog = state.dogs.slice();
                  newDog.push(action.payload);
                  return {
                    ...state,
                    allDogs: newDog, //[...state.activities, action.payload]
                  };
                
        default:
        return { 
            ...state 
        };
    }
}

export default reducer;