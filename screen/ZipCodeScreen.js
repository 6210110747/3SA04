import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableHighlight} from "react-native"
import { StatusBar } from 'expo-status-bar'; 
import { useNavigation } from '@react-navigation/native';

const  availableZipItems =[
    { place: '  Hatyai', code: '90110' },
    { place: '  Trang', code: '92000' },
    { place: '  Chiangmai', code: '50000' },
    { place: '  Khonkaen', code: '40000' },
    { place: '  Chonburi', code: '20000' },
    { place: '  Suratthani', code: '84000' },
    { place: '  Bankok', code: '10310' },
    { place: '  MaeHongSon', code: '58000' }


]





const ZipItem = ({place, code,navigation,}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
        
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}> {place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
            <StatusBar style="auto"/>
        </View>
    </TouchableHighlight>
    )
   

export default function zipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.home}> Weather in Thailand </Text>

            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </View>
                   
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: "#20232a",
        
    },
    zipPlace: {
         flex: 1,
         backgroundColor: '#BFB8F4',
         color: 'black',
         fontSize: 20 ,
         textAlign: 'center',
             
    },
    zipCode: {
        flex: 1,
        backgroundColor: '#F6CBD1',
        color: 'black',  
        fontSize: 20,
        textAlign: 'center' 
    },
    home:{
        //marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 15,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"

    },
    container:{
        flex: 1,
        backgroundColor: "#eaeaea"
    }
    
})

