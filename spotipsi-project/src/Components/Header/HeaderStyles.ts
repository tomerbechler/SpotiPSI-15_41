import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    header: {
        backgroundColor:"#232323",
        color:"#bd6ffc",
        width:"100vw",
        marginTop: 0,
    },
    logo:{
        display: "flex",
        direction:"rtl",
        padding: "10px",
        alignItems: "center",
        justifyContent: "start",
    },
    icon:{
        fontSize:"25px",
    },
    logoText:{
        fontSize: "24px",
    }

}));

export default useStyles;