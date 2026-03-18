
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    item: {
        color:"white",
        direction:"ltr",
        borderBottom:"1px solid grey",
        marginRight:"1%",
        alignItems:"center"
    },
    checkBox:{
        color:"white"
    },
    title:{
        color:"white",
        marginRight:"3%"
    },
    icons:{
        justifyItems:"center"
    }
}));

export default useStyles;