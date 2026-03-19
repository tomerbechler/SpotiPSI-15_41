import FetchSongs from "./FetchAndPresent/FetchSongs";
import FetchPlaylist from "./FetchAndPresent/fetchPlaylists";
import AllSongsPage from "./Pages/AllSongsPage";
import FavoritePage from "./Pages/FavoritesPage";
import PlaylistsPage from "./Pages/PlaylistsPage";
import { useState, useEffect } from "react";
import FetchFavoriteSongId from "./FetchAndPresent/FetchFavorite";
import type Song from "./types";
import type Platlist from "./types";

export interface Props {
  page: string;
}
export const PageContent: React.FC<Props> = ({ page }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [favoriteIdList, setFavoriteIdList] = useState<string[]>([]);
  const [playlists, SetPlaylists] = useState<Platlist[]>([]);

  useEffect(() => {
    async function loadSongs() {
      const data = await FetchSongs();
      setSongs(data);
    }
    loadSongs();
  }, []);

  useEffect(() => {
    async function loadFavId() {
      const idList = await FetchFavoriteSongId();
      setFavoriteIdList(idList);
    }
    loadFavId();
  }, []);

  useEffect(() => {
    async function loadPlaylists() {
      const data = await FetchPlaylist();
      SetPlaylists(data);
    }
    loadPlaylists();
  }, []);

  const handleLike = async (songId: string, checkd: boolean) => {
    const favoriteIdList: string[] = await FetchFavoriteSongId();

    if (checkd) {
      setFavoriteIdList((prev) => [...prev, songId]);
    } else {
      setFavoriteIdList((prev) => prev.filter((id) => id !== songId));
    }

    if (checkd && !favoriteIdList.includes(songId)) {
      await fetch("http://127.0.0.1:5001/api/favorites/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songId: songId }),
      });
    } else if (!checkd && favoriteIdList.includes(songId)) {
      await fetch("http://127.0.0.1:5001/api/favorites/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songId: songId }),
      });
    }
  };
  const handlePlaylist = async (playlistName: string) => {
    const Playlists: Platlist[] = await FetchPlaylist();

    if (!Playlists.some((plalist) => plalist.name === playlistName)) {
      const response = await fetch("http://127.0.0.1:5001/api/favorites/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: playlistName }),
      });
      const playlist: Platlist = await response.json();

      SetPlaylists((prev) => [...prev, playlist]);
    } else {
      console.log("playlist name is existed");
    }
  };

  if (page == "AllSongsPage") {
    console.log(page);
    return (
      <AllSongsPage
        data={songs}
        FavoriteidList={favoriteIdList}
        onLikeChange={handleLike}
        playlists={playlists}
      />
    );
  } else if (page == "FavoritePage") {
    console.log(page);
    return (
      <FavoritePage
        data={songs}
        FavoriteidList={favoriteIdList}
        onLikeChange={handleLike}
        playlists={playlists}
      />
    );
  } else if (page == "PlaylistsPage") {
    console.log(page);
    return <PlaylistsPage addPlaylist={handlePlaylist}/>;
  }
};
