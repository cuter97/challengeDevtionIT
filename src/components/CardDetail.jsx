import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getInfoId } from "../redux/actions/InfoAction"


const CardDetail = () => {

    const { id } = useParams()
    const info  = useSelector(store => store.info.information)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoId(id))
    }, [id, dispatch])

    const img = `https://image.tmdb.org/t/p/w500${info.poster_path}`

    return (
        <div className="card-container">
            <div className="card mb-3 card-detail" style={{ "maxWidth": "1040px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start"  alt="poster-movie"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{info.title}</h5>
                            <p className="card-text">{info.overview}</p>
                            <p className="card-text"><small className="text-muted">lenguaje: {info.original_language}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardDetail