import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'
//import FetchFavoriteSongId from '../FetchAndPresent/FetchFavorite'

interface Props{
    data:Song[],
    FavoriteidList:string[]
}

const FavoritePage:React.FC<Props> = ({data,FavoriteidList}) =>{

    const filterSongs:Song[] = data.filter(song=> FavoriteidList.some(id => id === song.id))

    const handleLike = async (songId: string, checkd:boolean) => {

        //const {favoriteIdList} = FetchFavoriteSongId()
        const response = await fetch('http://127.0.0.1:5001//api/favorites');
        const favoriteIdList:string[] = await response.json();

        if (checkd && !favoriteIdList.includes(songId)){
            await fetch('http://127.0.0.1:5001/api/favorites/add',
                 {
                    method: 'POST',
                    body: JSON.stringify(songId)
                })
        }

        else if (!checkd && favoriteIdList.includes(songId)){
            await fetch('http://127.0.0.1:5001/api/favorites/remove',
                 {
                    method: 'POST',
                    body: JSON.stringify(songId)
                })
        }
    }

    return(
        <div>
            <PresentSongs data={filterSongs} onLikeChange={handleLike}/>
        </div>
    )
}
export default FavoritePage