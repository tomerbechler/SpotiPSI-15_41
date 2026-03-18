import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  sideBar: {
    width: "200px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifySelf:"end",
    paddingTop: "10px",
    direction: "rtl",             
  },

  option: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    gap: "10px",                  
    cursor: "pointer",
    color:"white",

    "&:hover": {
      backgroundColor: "#1f1f1f", 
    },
  },

  icon: {
    fontSize: "24px",
  },
}));

export default useStyles;