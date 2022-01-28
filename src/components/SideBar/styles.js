import styled from 'styled-components';
import {Theme} from '../../theme';


export const SideBar = styled.nav`
    padding-top: 1.6rem;
    margin-top: 0.4rem;
    margin-right: 0.6rem;
    background-color: ${(props)=>props.theme.colors.background};
`

export const List = styled.ul`
    padding-left: 1rem;
    height: 100vh;
    padding-right: 10rem;
    list-style: none;
`

export const ListItem = styled.li`
    color: ${(props)=>props.theme.colors.text};
`