import React, {useEffect, useState} from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const [refresh, setRefresh] = useState(true);
  
  useEffect(() => {
    const obtenerCiudadesStorage = async() =>{
      try {
        const ciudadesStorage = await AsyncStorage.getItem('ciudades');
        if (ciudadesStorage){
        setListadoCiudades(JSON.parse(ciudadesStorage))
        }
      } catch (error) {

        console.log(error)
        
      }
    } 
    obtenerCiudadesStorage();
  }, [refresh])

  
  const almacenarCiudades = async (ciudadJSON) =>{
    try {
      await AsyncStorage.setItem('ciudades', ciudadJSON);
    } catch (error) {
      console.log(error)       
    }
}


  return (

    <TouchableWithoutFeedback onPress={() => ocultarTeclado()} style={styles.app}>
     
     
       

      <View style = {styles.app}>

      <StatusBar barStyle = "light-content" backgroundColor='#700B97' />
        <View style = {styles.view}>

           <Form 
           style={styles.form}
           ciudadInput = {ciudadInput} 
           setCiudadInput = {setCiudadInput}
           listadoCiudades = {listadoCiudades}
           setListadoCiudades = {setListadoCiudades}
           almacenarCiudades = {almacenarCiudades}
           />
        </View>

       <ListadoCiudades 
       listadoCiudades = {listadoCiudades}
       setListadoCiudades = {setListadoCiudades}
       almacenarCiudades = {almacenarCiudades}
       refresh = {refresh}
       setRefresh = {setRefresh}

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
    marginBottom: 100,

  }
 
});

export default App;