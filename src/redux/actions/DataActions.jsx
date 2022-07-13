import * as dataTypes from '../types/dataTypes'
import movieDB from '../../api/movieDB'

export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: dataTypes.DATA_START })

        const res = await movieDB.get('/discover/movie')

        dispatch({
            type: dataTypes.DATA_SUCCESS,
            payload: res.data.results
        })


    } catch (error) {
        dispatch({
            type: dataTypes.DATA_ERROR,
            payload: error.code,
        })
    }
}