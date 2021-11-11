import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormClima from '../components/Clima/FormClima';
import ObtenerClima from '../components/Clima/ObtenerClima';


const Climate = () =>{

  const [ciudadClimaInput, setCiudadClimaInput] = useState();
  const [trigger, setTrigger] = useState(false);
  const [listadoClimaCiudades, setListadoClimaCiudades] = useState([]);
  const [latitudCiudad, setLatitudCiudad] = useState();
  const [longitudCiudad, setLongitudCiudad] = useState();
  const [ciudad, setCiudad] = useState();
 
  

  useEffect(() => {
    const obtenerCiudadesStorage = async() =>{
      try {
        const ciudadesStorage = await AsyncStorage.getItem('ciudades');
        if (ciudadesStorage){
        setListadoClimaCiudades(JSON.parse(ciudadesStorage))
        }
      } catch (error) {

        console.log(error)
        
      }
    }
 
    obtenerCiudadesStorage();
     
  }, []);




  return (

    //<TouchableWithoutFeedback /* onPress={() => ocultarTeclado()} */ style={styles.app}>    

      <View style = {styles.app}>

       <StatusBar barStyle = "light-content" backgroundColor='#F0A500' />
       
        <View style = {styles.view}>

           <FormClima 
           style={styles.form}
           ciudadClimaInput = {ciudadClimaInput} 
           setCiudadClimaInput = {setCiudadClimaInput}
           listadoClimaCiudades = {listadoClimaCiudades}
           setListadoClimaCiudades = {setListadoClimaCiudades}
           trigger = {trigger}
           setTrigger = {setTrigger}
           ciudad = {ciudad}
           setCiudad = {setCiudad}
           
           setLatitudCiudad = {setLatitudCiudad}
           setLongitudCiudad ={setLongitudCiudad}
           
           />

        <ObtenerClima 
           
           latitudCiudad = {latitudCiudad}
           longitudCiudad ={longitudCiudad}
           trigger = {trigger}
           setTrigger = {setTrigger}
           ciudadClimaInput = {ciudadClimaInput}
           ciudad = {ciudad}
           
           />



        </View>


        
      
      </View>  
    //</TouchableWithoutFeedback>
  );
};

export default Climate;

const styles = StyleSheet.create({

  app:{
    flex: 1,
    //backgroundColor: "black",
    //justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(125, 125, 125, 0.1)',
    marginTop: -10,
  },

  view:{
    width:"100%",
    //height: 50,
  },

  form:{
    //height: 40
   //backgroundColor: 'blue'
  },
 

 
});

