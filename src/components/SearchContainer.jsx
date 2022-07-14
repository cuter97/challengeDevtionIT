import { useSelector } from "react-redux"
import Card from "./Card"

const SearchContainer = () => {

    //traigo las peliculas buscadas
    const dataSearch = useSelector(store => store.search.arrayBusqueda)

    return (
        <div className='cards-container row'>
             {
                dataSearch.map(item => (
                    <Card key={item.id} props={item} />
                ))
             }
        </div>
    )
}
export default SearchContainer