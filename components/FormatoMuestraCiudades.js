import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';

const FormatoMuestraCiudades = ({ciudadMostrar}) =>{



    return(
        
    <View style = {styles.view}>
        <View style ={styles.conteiner}>

        <Text style = {styles.text}>
            {ciudadMostrar}
        </Text>

        <Text style = {styles.temp}>
            {ciudadMostrar}
        </Text>

        <Text style = {styles.icon}>
            {ciudadMostrar}
        </Text>

        </View>
    </View>
   
);

};

export default FormatoMuestraCiudades;

const styles = StyleSheet.create({

   

    view:{
        width: "100%",
        height: 60,
        backgroundColor: "#F9F3DF",
        //borderColor: "black",
        //borderTopWidth: 1,
        //borderBottomWidth: 1,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 1,
                        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

        marginVertical: 5,
        padding: 5,

        justifyContent: 'center',
    },

    conteiner:{
        flexDirection: 'row',


    },

    text:{
        paddingHorizontal: 10,
        fontSize: 16,
        color: "blue",
        backgroundColor: 'grey',
        width: '60%', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
        
    },

    temp:{
        paddingHorizontal: 10,
        fontSize: 16,
        color: "blue",
        backgroundColor: 'orange',
        width: '20%', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }, 

    icon:{
        paddingHorizontal: 10,
        fontSize: 16,
        color: "blue",
        backgroundColor: 'yellow', 
        width: '20%',
        textAlign: 'center'
    }

})