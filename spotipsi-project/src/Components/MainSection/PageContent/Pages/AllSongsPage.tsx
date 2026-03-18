import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'
const AllSongsPage = (data:Song[]) =>{
    return(
        <div>
            {PresentSongs(data)}
        </div>
    )
}
export default AllSongsPage