import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSearch } from './hooks/useSearch';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/actions/DataActions";

import Home from './routes/Home';
import CardDetail from './components/CardDetail';
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

const App = () => {
    const { search, handleChange, setSearch } = useSearch()
    const dispatch = useDispatch();
    const loading = useSelector(store => store.data.loading)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        //genero dos segundos de delay al abrir la app y muestro la pantalla de carga
        setTimeout(() => {
            //hago el dispatch para obrener la información del servidor
            dispatch(getData())
            setLoad(true)
        }, 2000)

    }, [dispatch])
    
    if (load == false || loading)
        return <Loading />

    return (
        <BrowserRouter>
            <Navbar handleChange={handleChange} setSearch={setSearch} search={search} />
            <Routes>
                <Route path='/' element={<Home search={search} />} />
                <Route path='/movie/:id' element={<CardDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App