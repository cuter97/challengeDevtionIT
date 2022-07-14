import { MdMovie } from 'react-icons/md'

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-content">
                <MdMovie className='icon-logo' />
                <div className="loader">
                    <p>Loading</p>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </div>
        </div>
    )
}
export default Loading