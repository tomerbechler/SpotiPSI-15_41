import type Song from '../types'
import PresentSongs from '../FetchAndPresent/PresentSongs'
import { Typography } from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";

interface Props{
    data:Song[],
    FavoriteidList:string[],
    onLikeChange: (songId:string, checked:boolean) => void

}

const AllSongsPage:React.FC<Props> = ({data,FavoriteidList,onLikeChange}) =>{
    const { classes } = useStyles();
    return(
        <div>
            <Typography variant="h3" className={classes.title}> כל השירים</Typography>
            <PresentSongs data={data} favoriteIdList ={FavoriteidList} onLikeChange={onLikeChange}/>
        </div>
    )
}
export default AllSongsPage