import { MdMovie } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ handleChange, search, setSearch }) => {

    const location = useLocation()

    return (
        <>
            <nav className="navbar" >
                <div className="container nav-container">
                    {
                        (location.pathname === '/')
                            ?
                            (
                                <div
                                    className='boton'
                                    onClick={() => setSearch(() => '')}
                                >
                                    <MdMovie className='icon' />
                                </div>
                            )
                            :
                            (
                                <Link to='/'>
                                    <MdMovie className='icon' />
                                </Link>
                            )
                    }

                    <div className='input-container'>
                        <FaSearch className='search-icon' />
                        <input
                            type="text"
                            placeholder='Search movie'
                            onChange={handleChange}
                            className="input-search"
                            value={search}
                        />
                    </div>

                </div>
            </nav >
        </>
    )
}
export default Navbar