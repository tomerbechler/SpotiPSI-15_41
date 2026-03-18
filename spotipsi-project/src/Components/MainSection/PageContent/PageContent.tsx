import FetchSongs from './FetchAndPresent/FetchSongs'
import AllSongsPage from './Pages/AllSongsPage'
import {useState, useEffect} from "react";
//import type Props from './types'

export interface Props{
    page: string // enum 
}
export const PageContent: React.FC<Props> =({page}) =>{
    const [currentPage, setCurrentPage] = useState('AllSongsPage')
    useEffect (() =>{
        setCurrentPage(page)
    },[page])
    const {songList} = FetchSongs()
    if (currentPage == 'AllSongsPage'){
        return(
            <AllSongsPage data={songList}/>
        )
    }
}