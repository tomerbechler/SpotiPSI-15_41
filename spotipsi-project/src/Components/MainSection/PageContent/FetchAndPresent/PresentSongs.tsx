import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrow from '@mui/icons-material/PlayArrow';
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import type Song from "../types";
import type Playlist from "../types";

import useStyles from "./presentSongsStyles";
import { useState } from "react";

interface Props {
  data: Song[];
  favoriteIdList: string[];
  onLikeChange: (songId:string, checked:boolean) => void
  playlists:Playlist[]
  addSong:(playlistId:string,songId:any) => void
}



const PresentSongs: React.FC<Props> = ({ data,favoriteIdList,onLikeChange,playlists,addSong}) => {

  const { classes } = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(prev => (prev ? null : event.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <List>
        {data.map((song) => (
          <ListItem key={song.id} className={classes.item}>
            <IconButton>
                <PlayArrow className={classes.playArrow} />
            </IconButton>
            {<ListItemText className={classes.text} primary={`${song.name} - ${song.artist}`} />}
            <div className={classes.icons}>
            <IconButton onClick={handleClick}>
                <AddIcon className={classes.addIcon}/>
            </IconButton>
            <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
            <Paper>
            <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                    {playlists.map((playlist) =>(
                        <MenuItem onClick={() => { console.log(playlist.name); handleClose(); addSong(playlist.id,song.id)}}>{playlist.name}</MenuItem>
                    ))}
                </MenuList>
                </ClickAwayListener>
                </Paper>
            </Popper>
              <Checkbox
                className={classes.checkBox}
                checked={favoriteIdList.includes(song.id)} 
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
                onChange={(_,checked) => onLikeChange(song.id,checked)}
              />
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default PresentSongs;
