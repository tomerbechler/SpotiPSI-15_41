import { Typography, Button} from "@mui/material";
import useStyles from "../../PageContent/FetchAndPresent/presentSongsStyles";



const FavoritePage:React.FC = () =>{

    const { classes } = useStyles();
    return(
        <div>
            <div className={classes.playListHeader}>
                <Typography variant="h3" className={classes.title}>הפלייליסטים שלי</Typography>
                <Button className={classes.addPlaylistBtn}>צור פלייליסט +</Button>
            </div>

            <div>
            </div>

        </div>
        
    )
}
export default FavoritePage