import { Link } from "react-router-dom"

const Card = ({ props }) => {

    const { poster_path, title, id } = props

    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <Link to={`/movie/${id}`} className="card card-content" style={{ width: '18rem' }}>
            <img className="card-img-top" src={uri} alt='poster-movie' />
            <div className="card-body">
                <p className="card-title font-title">{title}</p>
            </div>
        </Link>
    )
}
export default Card