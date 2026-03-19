import React from "react";
import Typography from '@mui/material/Typography';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import useStyles from "./HeaderStyles";

export const Header: React.FC = () => {
      const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <MusicNoteIcon className={classes.icon}/>
        <Typography variant="h3" className={classes.logoText}>
          SpotiPsi 
        </Typography>
      </div>
    </div>
  );
}
