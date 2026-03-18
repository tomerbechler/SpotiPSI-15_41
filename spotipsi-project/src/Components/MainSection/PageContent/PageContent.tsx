import FetchSongs from './FetchAndPresent/FetchSongs'
import AllSongsPage from './Pages/AllSongsPage'
import {useState, useEffect} from "react";
//import type Props from './types'

export interface Props{
    page: string
}
export const PageContent: React.FC<Props> =({page}) =>{
    
    const {songList} = FetchSongs()
    if (page == 'AllSongsPage'){
        return(
            <AllSongsPage data={songList}/>
        )
    }
}