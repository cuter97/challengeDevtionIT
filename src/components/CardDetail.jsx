import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getInfoId } from "../redux/actions/InfoAction"
import { IoMdArrowRoundBack } from 'react-icons/io'
import Loading from "./Loading"


const CardDetail = () => {

    const { id } = useParams()
    const info = useSelector(store => store.info.information)
    const loadInfo = useSelector(store => store.info.loading)
    const dispatch = useDispatch();

    const img = `https://image.tmdb.org/t/p/original${info.poster_path}`

    useEffect(() => {
        dispatch(getInfoId(id))
    }, [id, dispatch])

    if (loadInfo)
        return <Loading />

    return (
        <div className="card-detail-container">
            <div className="card mb-3 card-detail">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="poster-movie" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body body-detail">
                            <h5 className="card-title">{info.title}</h5>
                            <p className="card-text">{info.overview}</p>
                            <p className="card-text"><b>Lenguage:</b> {info.original_language}</p>
                            <p className="card-text"><b>Average:</b> {info.vote_average}</p>
                            <p className="card-text"><b>Vote:</b> {info.vote_count}</p>
                        </div>
                        <Link className="back" to='/'>
                            <IoMdArrowRoundBack className="iconBack" />
                            <span className="span-back">Back</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardDetail