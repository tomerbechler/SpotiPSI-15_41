import FetchSongs from "./FetchAndPresent/FetchSongs";
import AllSongsPage from "./Pages/AllSongsPage";
import { useState, useEffect } from "react";
import FetchFavoriteSongId from "./FetchAndPresent/FetchFavorite";
//import type Props from './types'

export interface Props {
  page: string;
}
export const PageContent: React.FC<Props> = ({ page }) => {
    
  // useEffect(() => {
  //     FetchFavoriteSongId(favoriteIdList,setFavoriteIdList);
  // },[favoriteIdList])

  if (page == "AllSongsPage") {
    console.log(page)
    const { songList } = FetchSongs();
    return <AllSongsPage data={songList} />;
  }
};
