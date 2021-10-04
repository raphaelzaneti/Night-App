import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { TextContext } from '../../context/Store';
import Writter from '../Writter';
import * as S from './styles';

const Viewer = () =>{

    const {writter, setWritter} = useContext(TextContext)   
    
    function renderText(){
        const destination = document.getElementById("view-point")
        destination.innerHTML=writter
    }

    useEffect(renderText, [writter])

    return(
        <S.ViewPoint id= "view-point">
            
        </S.ViewPoint>
    );
};

export default Viewer