import { useEffect, useState } from "react";
import type Song from "../types";

const FetchFavoriteSongId = () =>{
    const [idList, setIdList] = useState<number[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState<string | null> (null)

    const fetchSongs = async () => {
        setIsLoading(true)
        try{
            const response = await fetch('http://127.0.0.1:5001/api/favorites');
            const data = await response.json();
            setIdList(data)
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
    useEffect(() => {
        FetchFavoriteSongId();
    },[idList])

    return(
        {idList}
    )
}
export default FetchFavoriteSongId
