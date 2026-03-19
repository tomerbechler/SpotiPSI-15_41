import { Typography} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import {IconButton} from "@mui/material";
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
    setCurrentPlaylist: (state:Playlist|null) => void
    songs: Song[]
    favoriteIdList: string[]
    onLikeChange:(songId:string, checked:boolean) =>void
}

const PlaylistsPage:React.FC<Props> = ({
    playlists,addPlaylist,handlePlaylistClick,currentPlaylist,setCurrentPlaylist,
    songs,favoriteIdList,onLikeChange}) =>{

    const { classes } = useStyles();

    let currentPlaylistSongs: Song[] = []
    if (currentPlaylist){
        currentPlaylistSongs = songs.filter((song) => currentPlaylist.songIds.includes(song.id))
    }

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

    if (playlistSongsDiv){
        return(<div>
            <div>
                <Typography variant="h3" className={classes.title}>{currentPlaylist?.name}</Typography>
                <IconButton onClick ={()=>setCurrentPlaylist(null)}>
                    <ArrowBack/>
                </IconButton>
            </div>
            {playlistSongsDiv}
        </div>)
    }
    else{
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
        </div>   
        )
    }

}
    
export default PlaylistsPage