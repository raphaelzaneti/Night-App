import React, { useState } from 'react'
import { Input } from './styles'
import Word from '../Word'

const Writter = () => {


    function handleSelection(){
        const el = document.getElementById('text-container')
        let start = el.selectionStart
        let end = el.selectionEnd
        let text = el.value.substring(start, end)
        console.log(text, start, end)
    }

    return (
        <>
            <button onClick={handleSelection}>Test the text manipulation</button>
            <Input id="text-container">Select a part of this text and press the button above. Then, check the console :)</Input>
        </>
    )
}

export default Writter