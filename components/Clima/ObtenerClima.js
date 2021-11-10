import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TextInput, StyleSheet, Button, TouchableHighlight, 
    TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';
import Current from './Current';    

const ObtenerClima = ( {latitudCiudad, longitudCiudad, trigger, setTrigger} ) => {

    
    const [dataCiudad, setDataCiudad] = useState({});
    const [temp, setTemp] = useState();
    const [sensacion, setSensacion] = useState()
    const [icono, setIcono] = useState()
    const [condicion, setCondicion] = useState()
    
    useEffect(() => {
    const crearCiudad = async () => {

    const appikey = '845ebd863db0aaaf1a949f55e0e7f977';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitudCiudad}&lon=${longitudCiudad}&units=metric&lang=es&exclude={part}&appid=${appikey}`;
    
    
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
           
            setDataCiudad (resultado);
            setTemp(resultado.current.temp)
            setSensacion(resultado.current.feels_like)
            setCondicion(resultado.current.weather[0].description)
            setIcono(resultado.current.weather[0].icon)


            console.log(resultado)
            
                
            
        }
        catch (error){
            Alert.alert(
            'Oops',
            'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
            [{text: 'Ok'}]
            )
        }
        
}; 

crearCiudad();
setTrigger(false)

     
}, [trigger]);


console.log(temp)
console.log(sensacion)
console.log(icono)
console.log(condicion)



return(

    <View>
    <Current 
    
    temp = {temp}
    sensacion = {sensacion}
    icono = {icono}
    condicion = {condicion}
    
    />
    </View>
)
};


export default ObtenerClima;