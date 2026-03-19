import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrow from '@mui/icons-material/PlayArrow';

import type Song from "../types";
import useStyles from "./presentSongsStyles";

interface Props {
  data: Song[];
  favoriteIdList: string[];
  onLikeChange: (songId:string, checked:boolean) => void
}

const PresentSongs: React.FC<Props> = ({ data,favoriteIdList,onLikeChange }) => {
  const { classes } = useStyles();

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
            <IconButton>
                <AddIcon className={classes.addIcon}/>
            </IconButton>
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
