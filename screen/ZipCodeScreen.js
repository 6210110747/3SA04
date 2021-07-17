import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableHighlight} from "react-native"
import { StatusBar } from 'expo-status-bar'; 
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code,navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
            <StatusBar style="auto" />
        </View>
    </TouchableHighlight>
    
    )
   

export default function zipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
         flex: 1,
    },
    zipCode: {
        flex: 1,
    }
})