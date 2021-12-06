import { useContext } from 'react';
import { GlobalContext } from '../../context/global';
import { Selected, StepMenuLine, ClickStep, StepHover, LineHover } from './styles'


const StepMenu = ({ step }) => {

    const { states, setters } = useContext(GlobalContext);
    const { stepIndex, previousStepIndex } = states
    const { changeIndexState } = setters
    return (
        <StepMenuLine>
            <Selected step={stepIndex} previousStep={previousStepIndex}>
                <p>Step {stepIndex}</p>
            </Selected>
            <ClickStep>
                {[0, 1, 2, 3, 4].map(stepIndex => <StepHover key={stepIndex} onClick={() => changeIndexState(stepIndex)}>
                    <LineHover>
                    </LineHover>
                    <p>Step {stepIndex}</p>
                </StepHover>
                )}
            </ClickStep>
        </StepMenuLine>
    );
}
export default StepMenu
