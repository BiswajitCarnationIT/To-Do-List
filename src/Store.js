import {createStore,applyMiddleware} from 'redux'
import Reducer from "./redux/Reducer"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


//const store = createStore(rootReducer)
const store = createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)));
//const store = createStore(Reducer);
export default store