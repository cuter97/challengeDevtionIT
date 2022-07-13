import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardDetail from './components/CardDetail';
import { useSearch } from './hooks/useSearch';
import Home from './routes/Home';

const App = () => {

    const { search, handleChange } = useSearch()

    // console.log(search)
    return (
        <BrowserRouter>
            <div>
                <input
                    type="text"
                    placeholder='Search movie'
                    onChange={handleChange}
                />
            </div>
            <Routes>
                <Route path='/' element={<Home search={search}/>} />
                <Route path='/movie/:id' element={<CardDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App