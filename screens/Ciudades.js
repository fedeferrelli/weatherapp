import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form from '../components/Ciudades/Form';
import ListadoCiudades from '../components/Ciudades/ListadoCiudades';
import Loading from '../components/Ciudades/LoadingCiudades';



const Ciudades = () =>{

  const [ciudadInput, setCiudadInput] = useState();
  const [checkInput, setCheckInput] = useState(false);
  const [listadoCiudades, setListadoCiudades] = useState([]);

  const [modalVisibleCiudades, setModalVisibleCiudades] = useState(false);
 
  

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
     
  }, []);


  const almacenarCiudades = async (ciudadJSON) =>{
    try {
      await AsyncStorage.setItem('ciudades', ciudadJSON);
    } catch (error) {
      console.log(error)       
    };
    
}


//console.log(listadoCiudades)


  return (

    //<TouchableWithoutFeedback /* onPress={() => ocultarTeclado()} */ style={styles.app}>    

      <View style = {styles.app}>

       <StatusBar barStyle = "light-content" backgroundColor='#F0A500' />
       
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
           modalVisibleCiudades={modalVisibleCiudades}
           setModalVisibleCiudades={setModalVisibleCiudades}
           />
        </View>


        {<ListadoCiudades 
        listadoCiudades = {listadoCiudades}
        setListadoCiudades = {setListadoCiudades}
        almacenarCiudades = {almacenarCiudades}
        setModalVisibleCiudades={setModalVisibleCiudades}
        setCiudadInput={setCiudadInput}
        

        style = {styles.listadoCiudades}
       />}
      


      <Loading 
modalVisibleCiudades={modalVisibleCiudades}
setModalVisibleCiudades={setModalVisibleCiudades}
ciudadInput={ciudadInput}/>


      </View>  
    //</TouchableWithoutFeedback>
  );
};

export default Ciudades;


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

