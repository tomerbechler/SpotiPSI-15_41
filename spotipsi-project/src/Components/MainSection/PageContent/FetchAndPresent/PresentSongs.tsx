import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField'
import ButtonGroup from '@mui/material/ButtonGroup'
import Paper from '@mui/material/Paper';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import type Song from '../types'
const PresentSongs = (data:Song[]) =>{
    return(
        <div>
            {data.map((song) => <div key={song.id}> D {song.name} - {song.artist} <div>+ heart</div> </div>)}
        </div>
    )
}
export default PresentSongs
