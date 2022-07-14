import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const CardContainer = () => {

    //traigo la data y ordeno por popularidad
    const data = useSelector(store => store.data.array)

    const popular = useMemo(() => {
        return data.sort((a,b) => b.popularity - a.popularity)
    }, [data])

    return (
        <div className='cards-container row'>
            <h1 className='titulo'>Popular Movies</h1>
             {
                popular.map(item => (
                    <Card key={item.id} props={item} />
                ))
             }
        </div>
    )
}
export default CardContainer