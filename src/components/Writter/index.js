import React, { useContext, useState } from 'react'
import { Input } from './styles'
import Word from '../Word'
import { TextContext } from '../../context/Store'
import { useEffect } from 'react/cjs/react.development'

const Writter = () => {

    const {writter, setWritter} = useContext(TextContext)
    
    function updateViewer(){
        const el = document.getElementById('text-container')
        setWritter(el.value)
    }
    
    function handleSelection(){
        const el = document.getElementById('text-container')
        let start = el.selectionStart
        let end = el.selectionEnd
        let text = el.value.substring(start, end)
        let selectedArea = [el, text, start, end]
        console.log(text, start, end)
        return selectedArea
    }

    function checkFormat(element, selectionStart, selectionEnd){
        let initialChar = ""
        let finalChar = ""
        let initialFormatTag = ""
        let finalFormatTag = ""
        let finalIndexes = undefined
        let initialIndexes = undefined

        for(let i=1; i <5; i++){
            initialChar = element.value.substring(selectionStart-i, selectionStart-i+1)
            initialFormatTag = initialChar+initialFormatTag
            if(initialChar==="<"){
                initialIndexes=[selectionStart-i, selectionStart-1]
                break
            }
        }

        for(let i=1; i <5; i++){
            finalChar = element.value.substring(selectionEnd+i-1, selectionEnd+i)
            finalFormatTag = finalFormatTag+finalChar
            if(finalChar===">"){
                finalIndexes=[selectionEnd, selectionEnd+i-1]
                break
            }
        }

        if(initialIndexes!==undefined && finalIndexes!==undefined){
            console.log(initialFormatTag, initialIndexes, finalFormatTag, finalIndexes)
            console.log(element.value[finalIndexes[0]])
        }
        return [initialIndexes, finalIndexes]
    }

    function removeFormat(element, initialIndexesOfFormat, finalIndexesOfFormat){
        console.log('form select', initialIndexesOfFormat, finalIndexesOfFormat)
        let textToArray = element.value.split("")

        for(let i=0; i<initialIndexesOfFormat.length; i++){
            textToArray[initialIndexesOfFormat[i]] = ""
        }
        
        for(let i=0; i<finalIndexesOfFormat.length; i++){
            textToArray[finalIndexesOfFormat[i]] = ""
        }

        let arrayToText = textToArray.join("")
        console.log(arrayToText)
        element.value = arrayToText
    }

    function handleIndexes(indexes){
        let initial = indexes[0]
        let final = indexes[1]
        let result = []
        while(initial!==final+1){
            result.push(initial)
            initial++
        }
        return result
    }

    function replaceFormatedText(element, replaced, toReplace, startIndex, endIndex){
        //element.value = element.value.replace(toReplace, replaced)
        let textToArray = element.value.split("")
        textToArray[startIndex] = replaced
        for(let i = startIndex+1; i<endIndex; i++){
            textToArray[i] = ""
        }
        let arrayToText = textToArray.join("")
        console.log(arrayToText)
        element.value=arrayToText
        setWritter(element.value)

    }

    function formatSelection(format){
        let [element, text, start, end] = handleSelection()
        let [initialIndexes, finalIndexes] = checkFormat(element, start, end)
        
        if(initialIndexes === undefined && finalIndexes ===undefined){
            let formatedText = `<${format}>`+text+`</${format}>`
            replaceFormatedText(element, formatedText, text, start, end)
        } else{
            initialIndexes = handleIndexes(initialIndexes)
            finalIndexes = handleIndexes(finalIndexes)
            removeFormat(element, initialIndexes, finalIndexes)
        }
    }

    return (
        <>
            <button onClick={() => formatSelection('b')}>Bold</button>
            <button onClick={() => formatSelection('em')}>Italic</button>
            <Input id="text-container" onChange={updateViewer} >Here you can see the Writter and below you see the Viewer!</Input>
        </>
    )
}

export default Writter