import { useState } from "react"
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/actions/SearchAction";

export const useSearch = () => {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value !== '')
            dispatch(getSearch(e.target.value))
    }

    // const handleClick = () => {
    //     setSearch('')
    //     console.log('diste click')
    // }

    return {
        search,
        handleChange,
        setSearch,
    }
}