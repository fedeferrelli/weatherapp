import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TextInput, StyleSheet, Button, TouchableHighlight, 
    TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';
import Current from './Current';    
import CurrentExtended from './CurrentExtended';
import Pronostico from './Pronostico';

const ObtenerClima = ( {latitudCiudad, longitudCiudad, trigger, setTrigger, ciudadClimaInput, ciudad} ) => {

    
    const [dataCiudad, setDataCiudad] = useState({});
    const [temp, setTemp] = useState();
    const [sensacion, setSensacion] = useState();
    const [icono, setIcono] = useState();
    const [condicion, setCondicion] = useState();
    const [date, setDate] = useState();

    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [sunrise, setSunrise] = useState();
    const [sunset, setSunset] = useState();

    const [daily, setDaily] = useState({});
    
    
    useEffect(() => {
    const crearCiudad = async () => {

    const appikey = '845ebd863db0aaaf1a949f55e0e7f977';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&lang=es&exclude={part}&appid=${appikey}`;
    
    
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
           
            setDataCiudad (resultado);

            setTemp(resultado.current.temp)
            setSensacion(resultado.current.feels_like)
            setCondicion(resultado.current.weather[0].description)
            setIcono(resultado.current.weather[0].icon)
            setDate(resultado.current.dt)

            setMax(resultado.daily[0].temp.max);
            setMin(resultado.daily[0].temp.min);
            setWind(resultado.current.wind_speed);
            setHumidity(resultado.current.humidity);
            setSunrise(resultado.current.sunrise);
            setSunset(resultado.current.sunset);
                
            setDaily(resultado.daily);
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


console.log(daily)



return(

    <View style={styles.view}>
    <Current 
    
    temp = {temp}
    sensacion = {sensacion}
    icono = {icono}
    condicion = {condicion}
    date = {date}
    ciudadClimaInput = {ciudadClimaInput}
    ciudad = {ciudad}
    
    />

<CurrentExtended 
    
    max= {max}
    min={min}
    wind={wind}
    humidity={humidity}

    sunrise={sunrise}
    sunset={sunset}
    
    />


    <Pronostico
        daily = {daily}
    />

    </View>
)
};


export default ObtenerClima;

const styles = StyleSheet.create({

    view:{
      
      
      alignItems: 'center',
      //justifyContent: 'center',
      //textAlign:'center',
     
    },
})  