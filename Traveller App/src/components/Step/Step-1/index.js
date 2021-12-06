import { } from '../styles'

import IconBackPack from '../../../img/backpack.png'
import ButtonNext from '../../ButtonNext'
import DragChoice from '../../DragChoice';
import items from '../../../data/step1.json'
import StepMenu from '../../StepMenu';
import TitleContainer from '../../Title';
import Header from '../../Header'
import { useContext } from 'react';
import { GlobalContext } from '../../../context/global';
import { LimitScreen } from '../../../stylesGlobal';

const Step = () => {

    const { states, setters } = useContext(GlobalContext);
    const { step1, } = states
    const { changeChoice } = setters
    const setChoice = (key, deleteKey) => {
        changeChoice(1, key, deleteKey)
    }
    return (
        <>
            <Header />
            <StepMenu />
            <LimitScreen>
                <TitleContainer>
                    What would you like to do?
                </TitleContainer>
                <DragChoice choices={step1} items={items} icon={IconBackPack} setChoice={setChoice} />
                <ButtonNext nextStep={2} />
            </LimitScreen>
        </>
    );
}

export default Step