import { useContext } from 'react';
import { GlobalContext } from '../../context/global';
import { Button } from './styles'


const ButtonNext = ({nextStep, children}) => {
    
    const { setters } = useContext(GlobalContext);
    const { changeIndexState } = setters
    return (
        <Button onClick={() => changeIndexState(nextStep)}>
            {children || 'NEXT'}
        </Button>
    );
}
export default ButtonNext