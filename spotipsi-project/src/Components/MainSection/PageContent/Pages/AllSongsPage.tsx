import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'
import { Typography } from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";
import type  Playlist  from '../types';

interface Props{
    data:Song[],
    FavoriteidList:string[],
    onLikeChange: (songId:string, checked:boolean) => void
    playlists:Playlist[]

}

const AllSongsPage:React.FC<Props> = ({data,FavoriteidList,onLikeChange,playlists}) =>{
    const { classes } = useStyles();
    return(
        <div>
            <Typography variant="h3" className={classes.title}> כל השירים</Typography>
            <PresentSongs data={data} favoriteIdList ={FavoriteidList} onLikeChange={onLikeChange} playlists={playlists}/>
        </div>
    )
}
export default AllSongsPage