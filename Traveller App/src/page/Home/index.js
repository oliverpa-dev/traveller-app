import { useState, useContext } from 'react';
import { Screen, ContainerGlobal } from '../../stylesGlobal';
import Step0 from '../../components/Step/Step-0';
import Step1 from '../../components/Step/Step-1';
import Step2 from '../../components/Step/Step-2';
import Step3 from '../../components/Step/Step-3';
import Step4 from '../../components/Step/Step-4';
import { GlobalContext } from '../../context/global'
const Home = () => {
    const { states } = useContext(GlobalContext);
    const { stepIndex, } = states
    const stepShow = () => {
        switch (stepIndex) {
            case 0:
                return <Step0 />
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Step4 />
        }
    }
    return (
        <ContainerGlobal>

            <Screen>
                {
                    stepShow()
                }
            </Screen>
        </ContainerGlobal>
    );
}
export default Home