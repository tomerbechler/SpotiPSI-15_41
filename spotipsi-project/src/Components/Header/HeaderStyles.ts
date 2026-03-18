import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    header: {
        display: "flex",
        direction:"rtl",
        alignSelf: "end",
        alignItems:"center",
        backgroundColor:"rgb(72, 69, 69)",
        height:"40px"
       
    },

}));

export default useStyles;