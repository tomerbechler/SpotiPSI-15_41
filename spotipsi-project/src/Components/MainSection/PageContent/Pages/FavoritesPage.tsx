import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'
//import FetchFavoriteSongId from '../FetchAndPresent/FetchFavorite'

interface Props{
    data:Song[],
    FavoriteidList:string[]
    onLikeChange: (songId:string, checked:boolean) => void

}

const FavoritePage:React.FC<Props> = ({data,FavoriteidList,onLikeChange}) =>{

    const filterSongs:Song[] = data.filter(song=> FavoriteidList.some(id => id === song.id))


    return(
        <div>
            <PresentSongs data={filterSongs} favoriteIdList={FavoriteidList} onLikeChange={onLikeChange}/>
        </div>
    )
}
export default FavoritePage