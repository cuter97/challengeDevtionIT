import { useSelector } from "react-redux";
import CardContainer from "../components/CardContainer";
import NoSearch from "../components/NoSearch";
import SearchContainer from "../components/SearchContainer";

const Home = ({search}) => {

    const info = useSelector(store => store.search.arrayBusqueda)

    return (
        <>
            {
                (search !== '' && info.length === 0) 
                    ? 
                    <NoSearch />
                    :
                    (
                        (search === '') ? (<CardContainer />) : (<SearchContainer />)
                    )
            }
        </>
    )
}
export default Home