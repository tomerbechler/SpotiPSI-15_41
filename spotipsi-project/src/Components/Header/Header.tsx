import React from "react";
import Typography from '@mui/material/Typography';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import useStyles from "./HeaderStyles";

export const Header: React.FC = () => {
      const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <MusicNoteIcon/>
      <Typography variant="body1">
        SpotiPsi 
      </Typography>
    </div>
  );
}
