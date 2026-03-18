import {Header} from './Components/Header/Header'
import {Player} from './Components/Player/Player'
import {Sidebar} from './Components/MainSection/Sidebar/Sidebar'
import {PageContent}  from './Components/MainSection/PageContent/PageContent'

function App() {
  return(
    <div>
      <Header/>
        <div>
            <Sidebar/>
            <PageContent page = "AllSongsPage"/>
        </div>
      <Player/>
    </div>
  )
}


export default App
