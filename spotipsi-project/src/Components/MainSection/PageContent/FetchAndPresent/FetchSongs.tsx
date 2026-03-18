const FetchSongs = async() =>{
    try{
        const response = await fetch('http://127.0.0.1:5001/api/songs');
        const data = await response.json();
        console.log("songs loaded")
        return (data)
    }
    catch(error){
        console.log(error)
        return //[]
    }
}
export default FetchSongs
