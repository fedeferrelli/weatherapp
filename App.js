import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';
import Form from './components/Form';
import ListadoCiudades from './components/ListadoCiudades';

const App = () =>{

  //const [consultar, setConsultar] = useState(true);
 // const [res, setResultado] = useState({"name":'', "temp":''});

  const ocultarTeclado = () => {
     // Keyboard.dismiss();
  }

  const [ciudadInput, setCiudadInput] = useState("fede");

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