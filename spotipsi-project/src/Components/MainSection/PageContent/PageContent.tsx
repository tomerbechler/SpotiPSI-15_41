import FetchSongs from "./FetchAndPresent/FetchSongs";
import AllSongsPage from "./Pages/AllSongsPage";
import FavoritePage from "./Pages/FavoritesPage";
import { useState, useEffect } from "react";
import FetchFavoriteSongId from "./FetchAndPresent/FetchFavorite";
import type Song from './types'


export interface Props {
  page: string;
}
export const PageContent: React.FC<Props> = ({ page }) => {
    const [songs, setSongs] = useState<Song[]>([])
    const [favoriteIdList, setFavoriteIdList] = useState<string[]>([])

    useEffect(() => {
    async function loadSongs() {
      const data = await FetchSongs()
      setSongs(data)
    }
    loadSongs()
  }, [])

    useEffect(() => {
        async function loadFavId() {
        const idList = await FetchFavoriteSongId()
        setFavoriteIdList(idList)
        }
        loadFavId()
    }, [])
  

  const handleLike = async (songId: string, checkd:boolean) => {

        //const {favoriteIdList} = FetchFavoriteSongId()
        const response = await fetch('http://127.0.0.1:5001//api/favorites');
        const favoriteIdList:string[] = await response.json();

        if (checkd) {
            setFavoriteIdList(prev => [...prev, songId]);
        } else {
            setFavoriteIdList(prev => prev.filter(id => id !== songId));
        }

        if (checkd && !favoriteIdList.includes(songId)){

            await fetch('http://127.0.0.1:5001/api/favorites/add',
                 {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ 'songId': songId })
                })
        }

        else if (!checkd && favoriteIdList.includes(songId)){
            await fetch('http://127.0.0.1:5001/api/favorites/remove',
                 {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ 'songId': songId })
                })
        }
    }



  if (page == "AllSongsPage") {
    console.log(page)
    return <AllSongsPage data={songs} FavoriteidList={favoriteIdList} onLikeChange={handleLike}/>;
  }

  else if (page == "FavoritePage") {
    console.log(page)
    return <FavoritePage data={songs} FavoriteidList={favoriteIdList} onLikeChange={handleLike} />; //////////// ID LIST
  }
};
