import { Typography} from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";
import FormDialog from "./Components/PlaylistDialog"
import PresentPlaylists from "../FetchAndPresent/PresentPlaylists"
import type Playlist from "../types"

export interface Props{
    playlists: Playlist[]
    addPlaylist:(name:string)=>void
}

const PlaylistsPage:React.FC<Props> = ({playlists,addPlaylist}) =>{

    const { classes } = useStyles();
    return(
        <div>
            <div className={classes.playListHeader}>
                <Typography variant="h3" className={classes.title}>הפלייליסטים שלי</Typography>
                <FormDialog onSubmit={addPlaylist}/>
            </div>

            <div>
                <PresentPlaylists playlists={playlists}/>
            </div>

        </div>
        
    )
}
export default PlaylistsPage