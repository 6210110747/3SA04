import React from 'react'
import { Text, View } from 'react-native'


export default function Forecast(props) {     
    return (         
    <View>             
        <Text>{props.main}</Text>            
        <Text>{props.description}</Text>                            
        <Text>{props.temp}°C</Text>
        <Text>Country </Text>
        <Text> {props.name}</Text> 
        <Text> {props.country}</Text>    
                       
                     
    </View>              
    ); }

  
