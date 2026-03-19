
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    item: {
        color:"white",
        direction:"ltr",
        borderBottom:"1px solid grey",
        marginRight:"1%",
        alignItems:"center",
        cursor: "pointer",
        "&:hover": {
      backgroundColor: "#3a2d458f",
    }
    },
    checkBox:{
        fontSize: "30px",
        color: "white",
        "&.Mui-checked": {
      color: "#bd6ffc",
    }
    },
    title:{
        marginTop: "3%",
        color:"white",
        marginRight:"3%"
    },
    icons:{
        display:"flex",
        justifyItems:"center",
        alignItems: "center",
        cursor: "pointer"
    },
    playArrow:{
        fontSize: "30px",
        margin:"10px",
        color: "#bd6ffc"
    },
    text:{
        fontSize: "40px",
        color: "white"
    },
    
    playListHeader:{    
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between"
    },
    addIcon:{
        color: "white"
    }

}));

export default useStyles;