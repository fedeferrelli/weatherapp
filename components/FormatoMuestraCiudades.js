import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';

const FormatoMuestraCiudades = ({ciudadMostrar}) =>{

    return(
        
    <View style = {styles.view}>
        <Text style = {styles.text}>
            {ciudadMostrar}
        </Text>
    </View>
   
);

};

export default FormatoMuestraCiudades;

const styles = StyleSheet.create({

   

    view:{
        width: "100%",
        height: 60,
        backgroundColor: "#F9F3DF",
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

    text:{
        paddingHorizontal: 10,
        fontSize: 16,
        color: "blue",
    }

})