import { Typography} from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";
import FormDialog from "./Components/PlaylistDialog"
import PresentPlaylists from "../FetchAndPresent/PresentPlaylists"
import type Playlist from "../types"

export interface Props{
    playListData: Playlist[]
    addPlaylist:(name:string)=>void
}

const PlaylistsPage:React.FC<Props> = ({playListData,addPlaylist}) =>{

    const { classes } = useStyles();
    return(
        <div>
            <div className={classes.playListHeader}>
                <Typography variant="h3" className={classes.title}>הפלייליסטים שלי</Typography>
                <FormDialog onSubmit={addPlaylist}/>
            </div>

            <div>
                <PresentPlaylists playListData={playListData}/>
            </div>

        </div>
        
    )
}
export default PlaylistsPage