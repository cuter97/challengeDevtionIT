import * as dataTypes from '../types/dataTypes'

const initialState = {
    arrayBusqueda: [],
    error: null,
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case(dataTypes.SEARCH_SUCCESS):
            return {...state, arrayBusqueda: action.payload}

        case(dataTypes.SEARCH_ERROR):
            return {...state, error: action.payload}

        default:
            return state; 
    }
}

export default searchReducer