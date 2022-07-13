import * as dataTypes from '../types/dataTypes'

const initialState = {
    loading: false,
    information: [],
    error: null,
}

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case (dataTypes.INFO_START):
                return {...state, loading: true}

        case(dataTypes.INFO_SUCCESS):
            return {...state, loading: false, information: action.payload}

        case(dataTypes.INFO_ERROR):
            return {...state, loading: false, information: action.payload}

        default:
            return state; 
    }
}

export default infoReducer