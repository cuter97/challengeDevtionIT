import { useState } from "react"
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/actions/SearchAction";

export const useSearch = () => {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch();

    //hago el dispatch con lo ingresado en el input para buscar la info
    const handleChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value !== '')
            dispatch(getSearch(e.target.value))
    }

    return {
        search,
        handleChange,
        setSearch,
    }
}