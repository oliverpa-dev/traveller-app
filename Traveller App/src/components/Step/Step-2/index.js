import { } from '../styles'

import IconPersonality from '../../../img/kind-of-personality.png'
import ButtonNext from '../../ButtonNext'
import DragChoice from '../../DragChoice';
import items from '../../../data/step2.json'
import StepMenu from '../../StepMenu';
import TitleContainer from '../../Title';
import Header from '../../Header'
import { GlobalContext } from '../../../context/global';
import { useContext } from 'react';
import { LimitScreen } from '../../../stylesGlobal';

const Step = () => {
    const { states, setters } = useContext(GlobalContext);
    const { step2, } = states
    const { changeChoice } = setters
    const setChoice = (key, deleteKey) => {
        changeChoice(2, key, deleteKey)
    }
    return (
        <>
            <Header />
            <StepMenu />
            <LimitScreen>
                <TitleContainer>
                    What kind of personality do you have?
                </TitleContainer>
                <DragChoice choices={step2}
                    items={items}
                    icon={IconPersonality}
                    setChoice={setChoice} />
                <ButtonNext nextStep={3} />
            </LimitScreen>
        </>
    );
}

export default Step