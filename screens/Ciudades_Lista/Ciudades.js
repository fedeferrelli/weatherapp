import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form from './Form';
import ListadoCiudades from './ListadoCiudades';



const App = () =>{

  const [ciudadInput, setCiudadInput] = useState();
  const [checkInput, setCheckInput] = useState(false);
  const [listadoCiudades, setListadoCiudades] = useState([]);
 
  

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
     

    
/* const getAllKeys = async () => {
  try {
    await AsyncStorage.removeItem('ciudades')
  } catch(e) {
    // remove error
  }

}

getAllKeys(); */


    obtenerCiudadesStorage();
     
  }, []);


  const almacenarCiudades = async (ciudadJSON) =>{
    try {
      await AsyncStorage.setItem('ciudades', ciudadJSON);
    } catch (error) {
      console.log(error)       
    };
    setCiudadInput('');
}


console.log(listadoCiudades)


  return (

    //<TouchableWithoutFeedback /* onPress={() => ocultarTeclado()} */ style={styles.app}>    

      <View style = {styles.app}>

        <StatusBar barStyle = "light-content" backgroundColor='#700B97' />
       
        <View style = {styles.view}>

           <Form 
           style={styles.form}
           ciudadInput = {ciudadInput} 
           setCiudadInput = {setCiudadInput}
           listadoCiudades = {listadoCiudades}
           setListadoCiudades = {setListadoCiudades}
           checkInput = {checkInput}
           setCheckInput = {setCheckInput}
           almacenarCiudades = {almacenarCiudades}
           />
        </View>


        {<ListadoCiudades 
        listadoCiudades = {listadoCiudades}
        setListadoCiudades = {setListadoCiudades}
        almacenarCiudades = {almacenarCiudades}
        

        style = {styles.listadoCiudades}
       />}
      
      </View>  
    //</TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({

  app:{
    flex: 1,
    //backgroundColor: "black",
    //justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
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
 
/*  listadoCiudades:{

    width: "100%",
    marginBottom: 200,

  } */
 
});

export default App;