import React, {useEffect, useState} from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
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

      <StatusBar barStyle = "light-content" backgroundColor='#700B97' />
        <View style = {styles.view}>

           <Form 
           style={styles.form}
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
    //backgroundColor: "black",
    //justifyContent: 'space-between',
    alignItems: 'center',
  },

  view:{
    width:"100%",
  },

  form:{
   // backgroundColor: 'blue'
  },
 
 listadoCiudades:{

    width: "90%",

  }
 
});

export default App;