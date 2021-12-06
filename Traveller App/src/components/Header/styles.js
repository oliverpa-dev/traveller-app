import styled from "styled-components";
import {primary} from '../../constants/colors'

export const HeaderContainer = styled.header`
    background-color: ${primary};
    height: 100px;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px !important;
    color: white;
    font-size: 3rem;
    font-family: 'Lobster', cursive;
    letter-spacing: 3px;
    font-weight: bold;
    //position: fixed;
    //top: 0;
`