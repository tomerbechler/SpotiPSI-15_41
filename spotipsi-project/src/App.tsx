import {Header} from './Components/Header/Header'
import {Sidebar} from './Components/MainSection/Sidebar/Sidebar'
import {Player} from './Components/Player/Player'
import { PageContent } from './Components/MainSection/PageContent/PageContent';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("allSongs");

  return(
    <div>
      <Header/>
        <div>
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <PageContent page = "AllSongsPage"/>
        </div>
      
      <Player/>
    </div>
  )
}


export default App
