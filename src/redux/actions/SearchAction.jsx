import * as dataTypes from '../types/dataTypes'
import movieDB from '../../api/movieDB'

export const getSearch = (info) => async (dispatch) => {
    try {
        const res = await movieDB.get(`/search/movie?query=${info}`)

        dispatch({
            type: dataTypes.SEARCH_SUCCESS,
            payload: res.data.results
        })

    } catch (error) {
        dispatch({
            type: dataTypes.SEARCH_ERROR,
            payload: error.code,
        })
    }
}