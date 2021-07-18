import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar' 
import Weather from '../components/Weather'



export default function WeatherScreen({route}){
    return(
        <View>
            <Weather zipCode={route.params.zipCode}/>
            <StatusBar style="auto" />
        </View>
    )
}