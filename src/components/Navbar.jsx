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
                        //si esta en la ruta del home y se busco algo, para ir para atras limpio el input
                        // si esta en otra ruta simplemete retorno al home
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