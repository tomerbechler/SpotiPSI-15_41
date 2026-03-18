import React from "react";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';

import useStyles from "./sidebarStyles";

interface Props{
    currentPage:string,
    setCurrentPage:(option:string)=>void
}

export const Sidebar: React.FC<Props> = ({setCurrentPage}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.sideBar}>
      <div className={classes.option} onClick={()=>setCurrentPage("AllSongsPage")}>
        <HomeIcon />
        <Typography variant="body1" component="h6">
          כל השירים
        </Typography>
      </div>
      <div className={classes.option} onClick={()=>setCurrentPage("PlaylistsPage")}>
        <LibraryMusicIcon />
        <Typography variant="body1" component="h6">
          פלייליסטים
        </Typography>
      </div>
      <div className={classes.option} onClick={()=>setCurrentPage("FavoritePage")}>
        <FavoriteIcon/>
        <Typography variant="body1" component="h6">
          מועדפים
        </Typography>
      </div>
    </div>
  );
};
