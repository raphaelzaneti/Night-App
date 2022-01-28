import React from 'react'
import * as S from './styles'
import SideBar from '../SideBar/SideBar.jsx'
import QuillEditor from '../QuillEditor'



const WorkSpace = () =>{
    
    return(
        <S.WorkspaceContainer>
            <SideBar />
            <QuillEditor />
        </S.WorkspaceContainer>
    )
}

export default WorkSpace