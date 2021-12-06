import styled from "styled-components";

export const ContainerGlobal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Screen = styled.div`
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    min-height: 100vh;
    overflow:hidden;
    *{
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
`
export const LimitScreen = styled.div`
    width: 700px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    position: relative;
    flex-grow: 1;
    padding-bottom: 50px;
`