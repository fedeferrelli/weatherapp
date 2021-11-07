import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback , Image} from 'react-native';
import { Icon } from 'react-native-elements';

const FormatoMuestraCiudades = ({ciudadMostrar, listadoCiudades, setListadoCiudades, almacenarCiudades,
}) =>{




const deleteCiti = ciudad =>{
    const ciudadesFiltradas = listadoCiudades.filter(citi => citi !== ciudad);
    console.log(ciudadesFiltradas);
    setListadoCiudades(ciudadesFiltradas);
    almacenarCiudades(JSON.stringify(ciudadesFiltradas));
    /* setFiltradas(ciudadesFiltradas);
    almacenarCiudades(JSON.stringify(filtradas))
    setRefresh(!refresh) */

}

console.log(ciudadMostrar.name)

    return(
        
    <View style = {styles.view} >





      <TouchableWithoutFeedback  >
        <View style ={styles.conteiner}>

 
    <View style = {styles.delete}>
        <Icon
        name='delete-forever'
        type = "material-community"
        iconStyle = {{color:'grey', fontSize: 20}}
        onPress = {() => deleteCiti(ciudadMostrar.name)}
    />  

  </View> 

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
            style = {styles.image}
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
        borderBottomWidth: 1,
        borderRadius: 0,     
        justifyContent: 'center',
    },

    conteiner:{
        flexDirection: 'row',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',

        

    },

    delete:{  
        fontSize: 13, 
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor:'rgba(125,125,125,0.1)',
        borderRadius: 100,
        width: '7.5%', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '55%', 
        textAlignVertical: 'center',
       },

    text:{
        color: "grey",
        paddingHorizontal: 10,
        fontSize: 18,
        width: '52.50%', 
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

    image:{
        paddingHorizontal: 10,
        width: '20%',
        width: 50,
        height: 50
    }

})