import ButtonNext from '../../ButtonNext'
import StepMenu from '../../StepMenu';
import Header from '../../Header'
import { LimitScreen } from '../../../stylesGlobal';
import { TitleWelcome , TitleText2} from '../styles'

const Step = () => {
    return (
        <>
            <Header />
            <StepMenu />
            <LimitScreen>
                <TitleWelcome>
                    Welcome
                </TitleWelcome>
                <TitleText2>In the following steps you are going to fill in your profile so later on, we will be able to match you with the local person.</TitleText2>


                <ButtonNext nextStep={1} />
            </LimitScreen>
        </>
    );
}
export default Step