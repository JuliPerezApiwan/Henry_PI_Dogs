import { GET_ALL_DOGS, ORDER, ORDER_BYWEIGHT } from './actions-types'

const initialState = {
    allDogs: [],
    orderDogs: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_DOGS:
            return { 
            ...state,
            allDogs: action.payload
        }
         case ORDER: 
            const orderDogs = action.payload === 'A-Z' ? state.allDogs.sort(function (a,b) {
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
                  action.payload === 'higher-weight'
                    ? state.allDogs.sort(function (a, b) {
                        if (a.weight > b.weight) {
                          return -1;
                        }
                        if (b.weight > a.weight) {
                          return 1;
                        }
                        return 0;
                      })
                    : state.allDogs.sort(function (a, b) {
                        if (a.weight > b.weight) {
                          return 1;
                        }
                        if (b.weight > a.weight) {
                          return -1;
                        }
                        return 0;
                      });
                return {
                  ...state,
                  allDogs: orderbyWeight
                };


        default:
        return { 
            ...state 
        };
    }
}

export default reducer;