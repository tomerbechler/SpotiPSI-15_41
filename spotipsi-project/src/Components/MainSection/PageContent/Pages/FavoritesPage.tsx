import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'

interface Props{
    data:Song[],
    FavoriteidList:string[]
}

const FavoritePage:React.FC<Props> = ({data,FavoriteidList}) =>{

    const filterSongs:Song[] = data.filter(song=> FavoriteidList.some(id => id === song.id)
    )
    return(
        <div>
            <PresentSongs data={filterSongs}/>
        </div>
    )
}
export default FavoritePage