import { Location } from '../styles'

import ButtonNext from '../../ButtonNext'
import StepMenu from '../../StepMenu';
import TitleContainer from '../../Title';
import Header from '../../Header'
import ListUser from '../../ListUser'
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as IconLocation } from '../../../img/location.svg'
import users from '../../../data/step4.json'
import { GlobalContext } from '../../../context/global';
import { LimitScreen } from '../../../stylesGlobal';

const Step = () => {

    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [address, setAddress] = useState("")


    const { states, setters } = useContext(GlobalContext);
    const { step4, } = states
    const { changeChoice } = setters

    const showPosition = (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude)
        setLongitude(longitude)
    }
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            reverse()
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }
    const reverse = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=AIzaSyDnN9xAVw1wM_bQTjlc_2lhAT8Pm40GmhE`)
            .then(res => res.json())
            .then((res) => {
                setAddress(res.results[1] ? res.results[1].formatted_address : "")
            })
    }
    useEffect(() => {
        getLocation()
    })
    const setLike = (key, deleteKey) => {
        changeChoice(4, key, deleteKey)
    }
    

    return ( 
        <> 
            <Header />
            <StepMenu />
            <LimitScreen>
                <TitleContainer>
                    Check the available locals
                </TitleContainer>
             <Location>
                    <IconLocation />
                    {address ? `You are in ${address}` : "..."}
                </Location>
<ListUser users={users} likeUsers={step4} setLike={setLike} /> 
            </LimitScreen>
         </>
    );
}

export default Step