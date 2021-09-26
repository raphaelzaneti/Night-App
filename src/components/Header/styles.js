import styled from 'styled-components'

export const Hello = styled.div`
    background-color: ${(props)=>props.theme.colors.background};
    color: ${(props)=>props.theme.colors.text};
    font-family: ${(props)=>props.theme.fonts.regular};
    display: flex;
    flex-direction: row;
    height: 10vh;
    align-items: center;
`