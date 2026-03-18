import { useEffect, useState } from "react";
import type Song from "../types";

const FetchSongs = () =>{
    const [songList, setSongList] = useState<Song[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState<string | null> (null)

    const fetchSongs = async () => {
        setIsLoading(true)
        try{
            const response = await fetch('http://127.0.0.1:5001/api/songs');
            const data = await response.json();
            setSongList(data)
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
        fetchSongs();
    },[])

    return(
        {songList}
    )
}
export default FetchSongs


// return(
//         <div>
//             {isLoading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {!isLoading && !error && songList.map((song) => (
//                 <div key ={song.id}>
//                     <h2>{song.name} - {song.artist}</h2>
//                 </div>
//                 )
//             )}
//         </div>
//     )