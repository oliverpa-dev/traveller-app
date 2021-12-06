import styled from "styled-components";

export const CardUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    -webkit-box-shadow: 0px 9px 6px -4px rgba(0,0,0,0.2); 
    box-shadow: 0px 9px 6px -4px rgba(0,0,0,0.2);
    border-radius: 8px;
    border: solid rgba(0,0,0,0.2) 1px;
    border-top: none;
    position: relative;
    margin-top: 10px;

`
export const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px !important;
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

`
export const Like = styled.div`
    align-self: flex-start;
    padding: 10px 10px;
    position: absolute;
    right: 0px;
    svg{
        width: 26px;
        height: 26px;
        cursor: pointer;
    }

`
export const Data = styled.div`
    flex-grow: 1;
    padding: 20px 0;   
    h3, h6{
        font-weight: 450;
    } 
    *{
        margin: 3px;
    }
    svg{
        width: 15px;
        height: 15px;
        margin: 0px;
    }
`