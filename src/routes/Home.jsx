import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/actions/DataActions";

import CardContainer from "../components/CardContainer";
import SearchContainer from "../components/SearchContainer";

const Home = ({search}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])
    
    return (
        <>
            {
                (search === '') ? (<CardContainer />) : (<SearchContainer />)
            }
        </>
    )
}
export default Home