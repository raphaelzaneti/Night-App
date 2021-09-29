import styled from 'styled-components';
import {Theme} from '../../theme';

export const Input = styled.textarea`
    background-color: ${(props)=>props.theme.colors.pageBackground};
    color: ${(props)=>props.theme.colors.pageText};
    border: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: inline;
    font-family: ${(props)=>props.theme.fonts.regular};
    font-size: ${(props)=>props.theme.fonts.defaultSize};
    resize: none;
`
