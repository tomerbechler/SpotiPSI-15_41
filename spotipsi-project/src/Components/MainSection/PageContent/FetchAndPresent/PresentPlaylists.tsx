import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import type Playlist from "../types";
import useStyles from "./presentSongsStyles";

interface Props {
  playlists: Playlist[];
}

const PresentPlaylists: React.FC<Props> = ({playlists}) => {
  const { classes } = useStyles();

  return (
    <>
      <List>
        {playlists.map((playlist) => (
          <ListItem key={playlist.id} className={classes.item}>
            {<ListItemText className={classes.text} primary={`${playlist.name}`} secondary={`שירים ${playlist.songIds.length}`} />}
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default PresentPlaylists;
