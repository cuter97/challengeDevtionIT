import { FaSearch } from 'react-icons/fa'

const NoSearch = () => {
    return (
        <div className="noFound">
            <div className="noFound-content">
                <FaSearch className='no-search-icon' />
                <p>Not found</p> 
            </div>
        </div>
    )
}
export default NoSearch