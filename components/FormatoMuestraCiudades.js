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
        height: 60,
        backgroundColor: "#fff",
        borderColor: "black",
        //borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderRadius: 0,

        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 1,
                        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

        marginVertical: 0,
        padding: 5,

        justifyContent: 'center',
    },

    conteiner:{
        flexDirection: 'row',
        height: 'auto'


    },

    text:{
        paddingHorizontal: 10,
        fontSize: 20,
        color: "black",
       
        width: '60%', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', 

        textAlignVertical: 'center'
        
    },

    temp:{
        paddingHorizontal: 10,
        fontSize: 20,
        color: "black",
     
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