import React from 'react'
import ReactQuill from 'react-quill'
import * as S from './styles';
import './style.css'

export default function QuillEditor(props){

    return(
        <S.Wrapper>
            <ReactQuill 
                placeholder={"Insert your text here"}
            >
                <div 
                    id="page"
                    style={{
                        backgroundColor: '#4a4e69',
                        color: '#f2e9e4',
                        minHeight: '20rem',
                        height: 'auto',
                        overflowWrap: 'break-word'
                    }}
                ></div>
            </ReactQuill>
        </S.Wrapper>
    )
}