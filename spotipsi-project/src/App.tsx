import {Header} from './Components/Header/Header'
import {Sidebar} from './Components/MainSection/Sidebar/Sidebar'
import {Player} from './Components/Player/Player'
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("allSongs");

  return(
    <div>
      <Header/>
        <div>
            <Sidebar/>
            <PageContent page = "AllSongsPage"/>
        </div>
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Player/>
    </div>
  )
}


export default App
