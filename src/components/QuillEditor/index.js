import React from 'react'
import ReactQuill from 'react-quill'
import * as S from './styles';
import './style.css'

export default function QuillEditor(props) {

    function printEditor() {
        const toPrint = document.getElementsByClassName('ql-editor')[0].innerHTML

        const newWindow = window.open('', '', 'heigth=500, width=500')
        newWindow.document.write('<html> <body id="body">')
        newWindow.document.write(toPrint)
        newWindow.document.write('</body></html>')
        newWindow.document.close()
        newWindow.print()
    }

    function renderPrintButton() {
        const toolBar = document.getElementsByClassName('ql-toolbar')[0]
        const span = document.createElement('span')
        const button = document.createElement('button')
        
        span.className = "ql-formats"
        button.className = "print-btn"
        button.onclick = printEditor
        
        span.appendChild(button)
        toolBar.appendChild(span)
        console.log(toolBar)

    }

    setTimeout(() => {
        renderPrintButton()
    }, 500);

    return (
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