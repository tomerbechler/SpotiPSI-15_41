import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/MainSection/Sidebar/Sidebar";
import { Player } from "./Components/Player/Player";
import { PageContent } from "./Components/MainSection/PageContent/PageContent";
import { useState } from "react";
import useStyles from "./AppStyle";

function App() {
  const [currentPage, setCurrentPage] = useState("AllSongsPage");
  const { classes } = useStyles();
  console.log(currentPage)
  
  return (
    <div className={classes.body}>
      <Header />
      <div className={classes.mainSection}>
        <div className={classes.sidebar}>
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        <div className={classes.pageContent}>
          <PageContent page={currentPage} />
        </div>
      </div>
      <Player/>
    </div>
  );
}

export default App;
