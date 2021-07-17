import React, { useState } from 'react'
import { Text } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {     
    const [forecastInfo, setForecastInfo] = useState({         
        main: '-',         
        description: '-',         
        temp: 0     
    })        
        return (        
        <Forecast{...forecastInfo}/>

        
        ) 
    } 