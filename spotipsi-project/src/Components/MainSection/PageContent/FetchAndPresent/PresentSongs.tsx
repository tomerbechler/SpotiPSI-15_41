import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField'
import ButtonGroup from '@mui/material/ButtonGroup'
import Paper from '@mui/material/Paper';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import type Song from '../types'
import useStyles from "./presentSongsStyles"
interface Props{
    data:Song[]
}
const PresentSongs:React.FC<Props> = ({data}) =>{
    const { classes } = useStyles();

    return(
        <List>
            {data.map((song) =>(
                 <ListItem key={song.id}>{
                     <ListItemText primary = {`${song.name} - ${song.artist}`}/>}
                     <div>
                        <AddIcon/> 
                        <Checkbox icon = {<FavoriteBorderIcon/>} checkedIcon = {<FavoriteIcon/>}/>
                    </div>
                </ListItem>)
                )}
        </List>
    )
}
export default PresentSongs
