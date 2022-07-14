import { Link } from "react-router-dom"

const Card = ({ props }) => {

    const { poster_path, title, id } = props

    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <Link to={`/movie/${id}`} className="card card-content" style={{ width: '18rem' }}>
            <div className="effect">
                <img className="card-img-top card-img" src={uri} alt='poster-movie' />
            </div>
            <div className="card-body info-body">
                <p className="font-title">{title}</p>
            </div>
        </Link>
    )
}
export default Card