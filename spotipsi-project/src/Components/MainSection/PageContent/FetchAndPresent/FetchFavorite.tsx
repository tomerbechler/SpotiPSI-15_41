import { useEffect, useState } from "react";
import type Song from "../types";

interface Props{
    
    
}

const FetchFavoriteSongId = (favoriteIdList:string[],setFavoriteIdList:(data:string[])=> void) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState<string | null> (null)

    const fetchSongs = async () => {
        setIsLoading(true)
        try{
            const response = await fetch('http://127.0.0.1:5001/api/favorites');
            const data = await response.json();
            setFavoriteIdList(data)
            console.log("songs loaded")
        }
        catch(error){
            setError("Somthing went wrong")
            console.log(error)
            return
        }
        finally{
            setIsLoading(false)
        }
    };
    

    return(
        {favoriteIdList}
    )
}
export default FetchFavoriteSongId
