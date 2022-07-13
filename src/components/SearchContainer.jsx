import { useSelector } from "react-redux"
import Card from "./Card"

const SearchContainer = () => {

    const dataSearch = useSelector(store => store.search.arrayBusqueda)

    return (
        <div className='cards-container row'>
            <h1 className='titulo'>Peliculas Populares</h1>
             {
                dataSearch.map(item => (
                    <Card key={item.id} props={item} />
                ))
             }
        </div>
    )
}
export default SearchContainer