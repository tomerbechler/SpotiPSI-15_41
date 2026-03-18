import FetchSongs from "./FetchAndPresent/FetchSongs";
import AllSongsPage from "./Pages/AllSongsPage";
import { useState, useEffect } from "react";
import FetchFavoriteSongId from "./FetchAndPresent/FetchFavorite";
//import type Props from './types'

export interface Props {
  page: string;
}
export const PageContent: React.FC<Props> = ({ page }) => {
  const [favoriteIdList, setFavoriteIdList] = useState<string[]>([]);

  // useEffect(() => {
  //     FetchFavoriteSongId(favoriteIdList,setFavoriteIdList);
  // },[favoriteIdList])

  if (page == "AllSongsPage") {
    const { songList } = FetchSongs();
    return <AllSongsPage data={songList} />;
  }
};
