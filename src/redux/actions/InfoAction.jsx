import * as dataTypes from '../types/dataTypes'
import movieDB from '../../api/movieDB'

export const getInfoId = (id) => async (dispatch) => {
    try {
        dispatch({ type: dataTypes.INFO_START })

        const res = await movieDB.get(`/movie/${id}`)

        dispatch({
            type: dataTypes.INFO_SUCCESS,
            payload: res.data
        })


    } catch (error) {
        dispatch({
            type: dataTypes.INFO_ERROR,
            payload: error.code,
        })
    }
}