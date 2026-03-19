import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'
import { Typography } from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";

interface Props{
    data:Song[],
    FavoriteidList:string[]
    onLikeChange: (songId:string, checked:boolean) => void

}

const FavoritePage:React.FC<Props> = ({data,FavoriteidList,onLikeChange}) =>{

    const filterSongs:Song[] = data.filter(song=> FavoriteidList.some(id => id === song.id))
    const { classes } = useStyles();
    return(
        <div>
            <Typography variant="h3" className={classes.title}>שירים מועדפים</Typography>
            <PresentSongs data={filterSongs} favoriteIdList={FavoriteidList} onLikeChange={onLikeChange}/>
        </div>
    )
}
export default FavoritePage