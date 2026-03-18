import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import type Song from "../types";
import useStyles from "./presentSongsStyles";
import { Typography } from "@mui/material";

interface Props {
  data: Song[];
  favoriteIdList: string[];
  onLikeChange: (songId:string, checked:boolean) => void
}

const PresentSongs: React.FC<Props> = ({ data,favoriteIdList,onLikeChange }) => {
  const { classes } = useStyles();

  return (
    <>
      <Typography variant="h2" className={classes.title}>
        {" "}
        כל השירים
      </Typography>
      <List>
        {data.map((song) => (
          <ListItem key={song.id} className={classes.item}>
            {<ListItemText primary={`${song.name} - ${song.artist}`} />}
            <div className={classes.icons}>
              <AddIcon />
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
