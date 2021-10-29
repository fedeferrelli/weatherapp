import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image} from 'react-native';

const FormatoMuestraCiudades = ({ciudadMostrar}) =>{



    return(
        
    <View style = {styles.view}>
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