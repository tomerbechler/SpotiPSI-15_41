import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    addPlaylistBtn:{
        marginTop:"3%",
        border: "1px solid #bd6ffc",
        color: "#bd6ffc",
        direction:"rtl",
        borderRadius: "20px"
    },

  dialog: {
    backgroundColor:"#3a2d458f"
  },

}));

export default useStyles;