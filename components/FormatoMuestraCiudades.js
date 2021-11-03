import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback , Image} from 'react-native';
import ListadoCiudades from './ListadoCiudades';

const FormatoMuestraCiudades = ({ciudadMostrar, listadoCiudades, setListadoCiudades, almacenarCiudades,
refresh, setRefresh}) =>{


   const [filtradas, setFiltradas] = useState([])

const deleteCiti = ciudad =>{
    const ciudadesFiltradas = listadoCiudades.filter(citi => citi !==ciudad);
    setFiltradas(ciudadesFiltradas);
    almacenarCiudades(JSON.stringify(filtradas))
    setRefresh(!refresh)

}

    return(
        
    <View style = {styles.view} >
      <TouchableWithoutFeedback  onPress = {() => deleteCiti(ciudadMostrar.name)}>
        <View style ={styles.conteiner}>

        <Text style = {styles.text}>
            {ciudadMostrar.name}
        </Text>

        <Text style = {styles.temp}>
            {parseInt(ciudadMostrar.main.temp - 273.15)}
            <Text>
                &#x2103;
            </Text>
        </Text>

        <Image 
            style = {styles.icon}
            source = {{uri:`http://openweathermap.org/img/w/${ciudadMostrar.weather[0].icon}.png`}}

        />

        </View>

        </TouchableWithoutFeedback>
    </View>
   
);

};

export default FormatoMuestraCiudades;

const styles = StyleSheet.create({

   

    view:{
        width: "100%",
        height: 65,
        backgroundColor: "#fff",
        borderColor: "lightgrey",
        //borderTopWidth: 0.5,
        borderBottomWidth: 1,
        borderRadius: 0,

        padding: 5,
       
        justifyContent: 'center',
    },

    conteiner:{
        flexDirection: 'row',
        height: 'auto',

        

    },

    text:{
     
        color: "grey",
        paddingHorizontal: 10,
        fontSize: 18,
       
       
        width: '60%', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', 

        textAlignVertical: 'center'
        
    },

    temp:{
        paddingHorizontal: 10,
        fontSize: 18,
        color: "grey",
     
        width: '20%', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        textAlignVertical: 'center'
    }, 

    icon:{
        paddingHorizontal: 10,
        width: '20%',
        width: 70,
        height: 50
    }

})