import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';
import Form from './components/Form';
import ListadoCiudades from './components/ListadoCiudades';

const App = () =>{

  const [consultar, setConsultar] = useState(true);
  const [res, setResultado] = useState({"name":'', "temp":''});

  const ciudad = 'Carilo';
  

  useEffect(() => {

    const consultarClima = async () =>{
    if (consultar){
      const appikey = '845ebd863db0aaaf1a949f55e0e7f977';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appikey}`;
      
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        if(resultado.name){
          setResultado({"name": resultado.name, "temp": resultado.main.temp-273.15});  
        } else { Alert.alert(
          "Error",
          "Algo malió sal",
          "ok"
        )}
        
                
      } catch (error){
        Alert.alert(
          "Error",
          "Algo malió sal",
          "ok"
        )
      }       
    };
  };
    consultarClima();
  }, [consultar]);

 

  const yo = res.temp;
  
  const ocultarTeclado = () => {
      Keyboard.dismiss();
  }

  const [ciudadInput, setCiudadInput] = useState([]);

  const [listadoCiudades, setListadoCiudades] = useState([]);

  return (

    <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
      <View style = {styles.app}>
        <View style = {styles.view}>

           <Form 
           ciudadInput = {ciudadInput} 
           setCiudadInput = {setCiudadInput}
           listadoCiudades = {listadoCiudades}
           setListadoCiudades = {setListadoCiudades}
           />
        </View>

       <ListadoCiudades 
       listadoCiudades = {listadoCiudades}
       style = {styles.listadoCiudades}
       />
      
      </View>  
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({

  app:{
    flex: 1,
    backgroundColor: "lightgrey",
    //justifyContent: 'space-between',
    alignItems: 'center',
  },

  view:{
    width:"100%",
    
    alignItems: 'center',

  },
 
  contenido: {
    marginHorizontal: '2.5%',
    marginVertical: 0,
  },

  componente:{
    marginTop: 0,
  },

  listadoCiudades:{

    width: "100%",

  }
 
});

export default App;