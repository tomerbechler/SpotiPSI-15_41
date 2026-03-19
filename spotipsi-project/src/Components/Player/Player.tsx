import React from "react"
import useStyles from "./playerStyle";

export const Player: React.FC =() =>{
    const { classes } = useStyles();
    return(<footer className={classes.palyer}>נגן שירים</footer>)
}