import styled from 'styled-components';

export const ViewPoint = styled.div`
    background-color: ${(props)=>props.theme.colors.pageBackground};
    color: ${(props)=>props.theme.colors.pageText};
    border: none;
    height: 40vh;
    width: 70vh;
    margin: 0;
    margin-top: 5vh;
    margin-left: 30vh;
    padding: 0;
    display: block;
    font-family: ${(props)=>props.theme.fonts.regular};
    font-size: ${(props)=>props.theme.fonts.defaultSize};
`