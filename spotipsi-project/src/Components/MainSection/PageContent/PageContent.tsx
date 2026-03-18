import FetchSongs from "./FetchAndPresent/FetchSongs";
import AllSongsPage from "./Pages/AllSongsPage";
import FavoritePage from "./Pages/FavoritesPage";
import { useState, useEffect } from "react";
import FetchFavoriteSongId from "./FetchAndPresent/FetchFavorite";
import type Song from './types'

//import type Props from './types'

export interface Props {
  page: string;
}
export const PageContent: React.FC<Props> = ({ page }) => {
    const [songs, setSongs] = useState<Song[]>([])
    //const [loading,setLoading] = useState(false)

    useEffect(() => {
    async function load() {
      const data = await FetchSongs()
      setSongs(data)
    }
    load()
  }, [])

  if (page == "AllSongsPage") {
    console.log(page)
    return <AllSongsPage data={songs} />;
  }
//   else if (page == "FavoritePage") {
//     console.log(page)
//     return <FavoritePage data={songs} />;
//   }
};
