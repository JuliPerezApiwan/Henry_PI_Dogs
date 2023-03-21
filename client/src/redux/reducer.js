import { GET_ALL_DOGS, ORDER, ORDER_BYWEIGHT, FILTER_BYTEMPERAMENTS, GET_ALL_TEMPERAMENTS } from './actions-types'

const initialState = {
    allDogs: [],
    orderDogs: [],
    allTemperaments: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_DOGS:
            return { 
            ...state,
            allDogs: action.payload,
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
                const allTemperaments = state.allDogs
                const temperamentFilter =
                  action.payload === 'All'
                    ? allTemperaments
                    : allTemperaments.filter((i) => i.temperament === action.payload);
                return {
                  ...state,
                  allTemperaments: temperamentFilter,
                };

        default:
        return { 
            ...state 
        };
    }
}

export default reducer;