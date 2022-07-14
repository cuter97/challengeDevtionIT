import { useSelector } from 'react-redux'
import Card from './Card'

const CardContainer = () => {

    //traigo la data y ordeno por popularidad
    const data = useSelector(store => store.data.array)
    const dataOrdenada = data.sort((a,b) => b.popularity - a.popularity)

    return (
        <div className='cards-container row'>
            <h1 className='titulo'>Popular Movies</h1>
             {
                dataOrdenada.map(item => (
                    <Card key={item.id} props={item} />
                ))
             }
        </div>
    )
}
export default CardContainer