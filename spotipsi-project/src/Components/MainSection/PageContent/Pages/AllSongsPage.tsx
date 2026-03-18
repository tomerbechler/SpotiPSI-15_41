import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'

interface Props{
    data:Song[],
    FavoriteidList:string[],
    onLikeChange: (songId:string, checked:boolean) => void

}

const AllSongsPage:React.FC<Props> = ({data,FavoriteidList,onLikeChange}) =>{
    return(
        <div>
            <PresentSongs data={data} favoriteIdList ={FavoriteidList} onLikeChange={onLikeChange}/>
        </div>
    )
}
export default AllSongsPage