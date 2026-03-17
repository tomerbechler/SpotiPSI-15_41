import {Sidebar} from './Sidebar/Sidebar'
import { PageContent } from './PageContent/PageContent'

import React from "react"

export const MainSection: React.FC =() =>{
    return(
        <div>
            <Sidebar/>
            <PageContent/>
        </div>
    )
}