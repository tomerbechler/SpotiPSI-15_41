import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    palyer: {
        backgroundColor:"#232323",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        color:"#979797",
        width:"100vw",
        marginBottom: 0,
        padding: "18px"
    }
}));

export default useStyles;