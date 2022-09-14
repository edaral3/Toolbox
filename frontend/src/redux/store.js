import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import filesReducer from "./files"

//  Configuracion en axios de los headers y la baseURL
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common["Content-Type"] = "application/json";

//  Conbinan los reductores
const rootReducer = combineReducers({
    files: filesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//  Genera el store
export default function generateStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
