import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Image, TextInput, StyleSheet, Button, TouchableHighlight, 
    TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';
import ObtenerClima from './ObtenerClima';    

const Current = ({temp, 
    sensacion,
    icono, 
    condicion}) =>{



    return(
        <View style = {styles.view}>
            
            <View style = {styles.leftView}>
            <Text style = {styles.temp}> {parseInt(temp)}º</Text>
            <Text style = {styles.sensacion}> sensación térmica {parseInt(sensacion)}º </Text>
            <Text style = {styles.sensacion}> {condicion} </Text>
            </View>

            <View style = {styles.rightView}>

            <Image 
            style = {styles.image}
            source = {{uri:`http://openweathermap.org/img/w/${icono}.png`}}

        />
            
            
            </View>
        </View>
        
    )




};

export default Current;


const styles = StyleSheet.create({

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
 
    image:{
        //paddingHorizontal: 10,
        //width: '20%',
        width: 125,
        height: 100,
        //backgroundColor: 'red'
    }

})