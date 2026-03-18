import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'

interface Props{
    data:Song[]
}

const AllSongsPage:React.FC<Props> = ({data}) =>{
    return(
        <div>
            <PresentSongs data={data}/>
        </div>
    )
}
export default AllSongsPage