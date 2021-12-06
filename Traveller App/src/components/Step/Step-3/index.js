import { } from '../styles'

import IconLanguage from '../../../img/language.png'
import ButtonNext from '../../ButtonNext'
import DragChoice from '../../DragChoice';
import items from '../../../data/step3.json'
import StepMenu from '../../StepMenu';
import TitleContainer from '../../Title';
import Header from '../../Header'
import TitleText from '../../TitleText';
import { LimitScreen } from '../../../stylesGlobal';
import { useContext } from 'react';
import { GlobalContext } from '../../../context/global';

const Step = () => {
    const { states, setters } = useContext(GlobalContext);
    const { step3 } = states
    const { changeChoice } = setters
    const setChoice = (key, deleteKey) => {
        changeChoice(3, key, deleteKey)
    }

    return (
        <>
            <Header />
            <StepMenu />

            <LimitScreen>
                <TitleContainer>
                    What language would you like to speak?
                </TitleContainer>
                <TitleText>By using your fingers move the rectangle with your answer inside the chest.</TitleText>
                <DragChoice choices={step3}
                    items={items}
                    icon={IconLanguage}
                    setChoice={setChoice} />
                <ButtonNext nextStep={4}/>
            </LimitScreen>
        </>
    );
}

export default Step