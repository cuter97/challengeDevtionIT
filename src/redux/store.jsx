import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import dataReducer from './reducer/DataReducer';
import searchReducer from './reducer/SearchReducer';
import infoReducer from './reducer/InfoReducer';


const rootReducer = combineReducers({
    data: dataReducer,
    search: searchReducer,
    info: infoReducer,
})

export default function generateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}