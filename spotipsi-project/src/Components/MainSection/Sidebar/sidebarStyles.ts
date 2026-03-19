import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  sideBar: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifySelf:"end",
    paddingTop: "10px",
    direction: "rtl",
    marginLeft: 0,
  },

  option: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    gap: "10px",                  
    cursor: "pointer",
    color:"white",

    "&:hover": {
      backgroundColor: "#b175e38f",
    },
  },

}));

export default useStyles;