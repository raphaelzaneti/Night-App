import React, { useState, createContext } from 'react'

const textState = ''

export const TextContext = React.createContext(textState)

const Store = props =>{
    
    const [writterState, setwritterState] = useState('')
    
    function updateState(value){
        setwritterState(value)
    }
    
    return(
        <TextContext.Provider value={{
            writter: writterState,
            setWritter: value => updateState(value),
        }}>
            {props.children}
        </TextContext.Provider>
    )
}

export default Store