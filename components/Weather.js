import React, { useEffect,useState } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import Forecast from './Forecast'
  
export default function Weather(props) {
     const [forecastInfo, setForecastInfo] = useState ({          
        main: '-',         
        description: '-',         
        temp: 0     
    })  
    useEffect(() => {         
        console.log(`fetching data with zipCode = ${props.zipCode}`)         
        if (props.zipCode) {             
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=6daa99ea35353a3f64bccc7a192a05c8`)                 
            .then((response) => response.json())                 
            .then((json) => {                     
                setForecastInfo({                         
                    main: json.weather[0].main,                         
                    description: json.weather[0].description,                         
                    temp: json.main.temp                     
                });                 
            })                 
            .catch((error) => {                     
                console.warn(error);                 
            });         
        } }, [props.zipCode])

         
        return (   
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>                              
                <Forecast {...forecastInfo} />             
            </ImageBackground>        
        
        ) 
    } 

const styles = StyleSheet.create({
    backdrop:{
        flexDirection: 'column',          
        alignItems: 'center',
        //backgroundColor: 'rgba(52, 52, 52, 0.8)',
        //fontWeight: 'bold', 
        width: '100%',
        height: '100%'
    }

})