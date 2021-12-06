import styled, { keyframes } from "styled-components";

const translate = (step = 0, previousStep = -1) => keyframes`
from{
    
    transform: translate(calc(100% * ${previousStep} ));
}
to{
    transform: translate(calc(100% * ${step} ));
}
`
export const StepMenuLine = styled.div`
    background-color: #ffdac1;
    height: 5px;
    width: 100%;
    position: relative;
    cursor: pointer;
`
export const ClickStep = styled.div`
    position: absolute;
    width: 100%;
    height: 40px;
    top: 0;
    display: flex;
    cursor: pointer;
`
export const StepHover = styled.div`
    width:  20%;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 2;
        >p{
            margin-top: 19px;
        }
            opacity: 0;
            :hover{
                opacity: 0.7;
            }
`
export const LineHover = styled.div`
    background-color: #f3a360;
    height: 5px;
    cursor: pointer;
    width: 100%;
    position: absolute;
`


export const Selected = styled.div`
    width:  20%;
    height: 100%;
    background-color: #f3a360;
    animation: ${({ step, previousStep }) => translate(step, previousStep)} 0.5s linear;
    -webkit-animation-fill-mode: forwards;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        position: absolute;
        top: 2px;
    }
`
