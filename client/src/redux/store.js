import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // me permite hacerle peticiones al servidor, traductor



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// configuracion para usar redux devtools en el navegador

const store = createStore(
    
    composeEnhancer(applyMiddleware(thunk))
);


export default store;