import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  mainSection: {
    display: "flex",
    direction: "rtl",
    width: "100%",
  },
  pageContent: {
    width: "90%",
    borderRight: "1px solid gray",
  },
  sidebar: {
    width: "15%",
  },
}));

export default useStyles;
