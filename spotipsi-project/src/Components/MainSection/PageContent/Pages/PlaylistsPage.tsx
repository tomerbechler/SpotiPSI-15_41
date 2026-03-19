import { Typography} from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";
import FormDialog from "./Components/PlaylistDialog"
import PresentPlaylists from "../FetchAndPresent/PresentPlaylists"
import PresentSongs from "../FetchAndPresent/PresentSongs";
import type Playlist from "../types"
import type Song from "../types"


export interface Props{
    playlists: Playlist[]
    addPlaylist:(name:string)=>void
    handlePlaylistClick: (playlistName:string)=>void
    currentPlaylist: Playlist|null
    songs: Song[]
    favoriteIdList: string[]
    onLikeChange:(songId:string, checked:boolean) =>void
}

const PlaylistsPage:React.FC<Props> = ({
    playlists,addPlaylist,handlePlaylistClick,currentPlaylist,
    songs,favoriteIdList,onLikeChange}) =>{

    const { classes } = useStyles();
    const currentPlaylistSongs = currentPlaylist ?
    songs.filter((song)=> currentPlaylist.songIds.includes(song.id)) :[];
    let playlistSongsDiv = null
    if (currentPlaylist){
        playlistSongsDiv = (
            <PresentSongs
                data={currentPlaylistSongs}
                favoriteIdList={favoriteIdList}
                onLikeChange={onLikeChange}
                playlists={playlists}/>
        )
    }
    return(
        <div>
            <div className={classes.playListHeader}>
                <Typography variant="h3" className={classes.title}>הפלייליסטים שלי</Typography>
                <FormDialog onSubmit={addPlaylist}/>
            </div>

            <div>
                <PresentPlaylists
                 playlists={playlists}
                 onPlaylistClick={handlePlaylistClick}/>
            </div>
            {playlistSongsDiv}
        </div>
        
    )
}
export default PlaylistsPage