import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import Navigation from '../../app/navigations/Navigation';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs" ;



const AppStructure = ({ navigation }) =>{

    const fede = 'ciudades'

    return(

        <>
        <View style = {styles.card}>

            <Image 
            style={styles.image}
            source={require('../../assets/images/nombres_ciudades.jpg')} />

            <Text style={styles.title}>
                Ciudades
            </Text>

            <Text style={styles.text}>
            Podrás agregar (y eliminar) las ciudades que quieras incorporar al seguimiento. 
            {'\n\n'}
            Las verás reflejadas en forma de lista con un resumen de la temperatura y condiciones climáticas del momento.         
            </Text>

            <Button 
            style = {styles.button}
            title='ir a ciudades'
            color="#000"
            accessibilityLabel="Learn more about this purple button"
            onPress = {() => navigation.navigate('ciudades')}
            />

        </View>


        <View style = {styles.card}>

            <Image 
            style={styles.image}
            source={require('../../assets/images/clima2.jpg')} />

            <Text style={styles.title}>
                Clima
            </Text>

            <Text style={styles.text}>
            Desde esta pantalla vas a poder elegir alguna de las ciudades que incorporaste y ver su clima actual y pronóstico en detalle.
            </Text>

            <Button 
            style = {styles.button}
            title='ir a clima'
            color="#000"
            accessibilityLabel="Learn more about this purple button"
            onPress = {() => navigation.navigate('climate')}
            />

        </View>

        <View style = {styles.card}>

            <Image 
            style={styles.image}
            source={require('../../assets/images/maps2.png')} />

            <Text style={styles.title}>
                Mapa
            </Text>

            <Text style={styles.text}>
            Vas a poder mirar en un mapa las ciudades que incorporaste.
            </Text>

            <Button 
            style = {styles.button}
            title='ir a mapa'
            color="#000"
            accessibilityLabel="Learn more about this purple button"
            onPress = {() => navigation.navigate('maps')}
            />

        </View>




        </>
        
    )
};

export default AppStructure;

const styles = StyleSheet.create({

    card:{
        width: '90%',
        //height: 280,
        borderWidth: 1,
      borderColor: 'darkgrey', 
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
	    height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 10,
        backgroundColor: '#fff',        
    },

    image:{
        width: '100%',
        height: 90,
        opacity: 0.7,
    },

    title:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
        
    },

    text:{
        textAlign: 'center',
        paddingHorizontal: 10,
        letterSpacing: 1.05,
        marginBottom: 20,
        color: 'grey'
    },

    button:{
        marginTop: 15,
        
    }

})