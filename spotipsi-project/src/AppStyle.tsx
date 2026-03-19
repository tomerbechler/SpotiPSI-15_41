import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  mainSection: {
    display: "flex",
    direction: "rtl",
    width: "100%",
    padding: "0px",
    overflow: "hidden",
  },
  pageContent: {
    flex: 1,
    borderRight: "1px solid gray",
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#bc6ffc62",
      borderRadius: "4px",
    },
    marginLeft:"2vw",
    paddingLeft:"2vw",
  },
  sidebar: {
    width: "12%",
    marginRight: "1%",
  },
  body: {
    margin: "0px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },

}));

export default useStyles;
