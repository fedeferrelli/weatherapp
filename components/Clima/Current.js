import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Image, TextInput, StyleSheet, Button, TouchableHighlight, 
    TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';
import ObtenerClima from './ObtenerClima';    

const Current = ({temp, 
    sensacion,
    icono, 
    condicion, date, ciudad}) =>{

        const obtenerFecha = (n) => {
        
        const d = new Date(n*1000)

        const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
        const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
       
        const dayName = weekDays[(d.getDay())]; 
        const dayNumber = d.getDate();
        const month = months[d.getMonth()];

        return (`${dayName}, ${dayNumber} de ${month}`)
      
    }


    return(
        <View>
           { <Text style = {styles.ciudad}>  {ciudad}</Text>}
            <Text style = {styles.fecha}>  {obtenerFecha(date)}</Text>


        <View style = {styles.view}>
            
            <View style = {styles.leftView}>
            <Text style = {styles.temp}> {parseInt(temp)}º</Text>
            <Text style = {styles.sensacion}> sensación térmica {parseInt(sensacion)}º </Text>
            <Text style = {styles.sensacion}> {condicion} </Text>
            </View>

            <View style = {styles.rightView}>

            
            <View style = {styles.icono}>
            <Image 
            style = {styles.image}
            source = {{uri:`http://openweathermap.org/img/w/${icono}.png`}}/>
            </View>
            
            </View>
        </View>
        </View>
    )




};

export default Current;


const styles = StyleSheet.create({

    ciudad:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 0,

    },

    fecha:{
       // backgroundColor: 'orange',
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 20,
    },

  view:{
    flexDirection: 'row',
    //backgroundColor: 'grey',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    
    //flexBasis: 1,

  },

  leftView:{
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',

  },

  rightView:{
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',

  },

  temp:{
    fontWeight: 'bold',
    fontSize: 55,
    marginBottom: 0,
    //backgroundColor: 'orange',
    padding: 0
},

sensacion:{
    fontStyle: 'italic',
    fontSize: 16,
    marginTop: 0,
},
icono: {
    //backgroundColor: 'white',
    borderRadius: 100,
    height: 125,
    width: 125,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',

    borderColor: '#F0A500',
    borderWidth: 0.5,
    backgroundColor: 'lightgrey',

},
    image:{
        //paddingHorizontal: 10,
        //width: '20%',
        width: 110,
        height: 100,
        //backgroundColor: 'red'
    }

})