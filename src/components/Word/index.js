import React from 'react'
import * as S from './styles'

const Word = (props) =>{

    return(
        <S.Span id={props.key} key={props.key}>{props.text}</S.Span>
    )
}

export default Word