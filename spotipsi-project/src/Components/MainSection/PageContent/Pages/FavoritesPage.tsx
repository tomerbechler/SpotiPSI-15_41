import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'
import { Typography } from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";
import type Playlist from '../types';
interface Props{
    data:Song[],
    FavoriteidList:string[]
    onLikeChange: (songId:string, checked:boolean) => void
    playlists:Playlist[]
}

const FavoritePage:React.FC<Props> = ({data,FavoriteidList,onLikeChange,playlists}) =>{

    const filterSongs:Song[] = data.filter(song=> FavoriteidList.some(id => id === song.id))
    const { classes } = useStyles();
    return(
        <div>
            <Typography variant="h3" className={classes.title}>שירים מועדפים</Typography>
            <PresentSongs data={filterSongs} favoriteIdList={FavoriteidList} onLikeChange={onLikeChange} playlists={playlists}/>
        </div>
    )
}
export default FavoritePage