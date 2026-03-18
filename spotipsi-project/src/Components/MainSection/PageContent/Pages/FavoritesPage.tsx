import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'

interface Props{
    data:Song[],
    idList:number[]
}

const FavoritePage:React.FC<Props> = ({data,idList}) =>{

    const filterSongs:Song[] = data.filter(song=>{
        idList.some(id => id === parseInt(song.id))
    })
    return(
        <div>
            <PresentSongs data={filterSongs}/>
        </div>
    )
}
export default FavoritePage