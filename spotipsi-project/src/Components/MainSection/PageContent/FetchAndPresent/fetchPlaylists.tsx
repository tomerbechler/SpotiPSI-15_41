const FetchPlaylist = async() =>{
    try{
        const response = await fetch('http://127.0.0.1:5001/api/playlists');
        const data = await response.json();
        console.log("playlists loaded")
        return(data)
    }
    catch(error){
        console.log(error)
        return []
    }
}
export default FetchPlaylist