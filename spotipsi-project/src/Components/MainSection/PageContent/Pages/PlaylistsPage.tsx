import { Typography} from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";
import FormDialog from "./Components/PlaylistDialog"

interface Props{
    
    addPlaylist:(name:string)=>void
}

const FavoritePage:React.FC<Props> = ({addPlaylist}) =>{

    const { classes } = useStyles();
    const func = () => {}
    return(
        <div>
            <div className={classes.playListHeader}>
                <Typography variant="h3" className={classes.title}>הפלייליסטים שלי</Typography>
                <FormDialog onSubmit={func}/>
            </div>

            <div>
            </div>

        </div>
        
    )
}
export default FavoritePage