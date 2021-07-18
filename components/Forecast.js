import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


export default function Forecast(props) {     
    return (         
    <View style={styles.weather}>             
        <Text style={styles.main}> {props.main}</Text>            
        <Text style={styles.main}>{props.description}</Text>                            
        <Text style={styles.main}> {props.temp}°C</Text>
        <Text style={styles.country}> Country </Text>
        <Text style={styles.main}> {props.name} {props.country}</Text> 
            
                       
                     
    </View>              
    ); }

const styles = StyleSheet.create ({
    weather:{
        flexDirection: 'column',
        backgroundColor: 'black',
        opacity: 0.6,
        width: '50%',
        alignItems: 'center',
        color:'#fdf5e6',
        display: 'flex',
        borderRadius: 15
    },
    country:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    main:{
        fontSize: 17,
        color: '#fdf5e6'
    }

}) 
  
