import styled from 'styled-components';
import {Theme} from '../../theme';

export const Wrapper = styled.main`
    background-color: ${(props)=>props.theme.colors.pageBackground};
    height: 40vh;
    width: 70vh;
    font-family: ${(props)=>props.theme.fonts.regular};
    margin-left: 30vh;
    color: ${(props)=>props.theme.colors.pageText}
`

export const Par = styled.p`

`