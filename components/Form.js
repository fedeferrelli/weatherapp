import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableHighlight, 
    TouchableWithoutFeedback, Alert} from 'react-native';

const Form = ({ciudadInput, setCiudadInput, listadoCiudades, setListadoCiudades}) => {
   
    
    

    

    const agregarListado = () =>{

        if(ciudadInput === ''){
            Alert.alert(
                'Oops',
                'El campo no puede estar vacío',
                [{text: 'Ok'}]
            )
        } else(setListadoCiudades([...listadoCiudades, ciudadInput]))
    }

console.log(listadoCiudades);

    return(
        
        
        <View style = {styles.view}>
            <TextInput
            placeholder = 'Ingresa una ciudad'
            placeholderTextColor = "rgb(125, 125, 125)"
            defaultValue = ""
            onChangeText = { ciudad => (setCiudadInput(ciudad))}
            
            style = {styles.input}
            />
           
            
           <View style={styles.viewbtn}>
            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={ () => agregarListado() }
            >
                <Text style={styles.textoCotizar}>Agregar!</Text>
            </TouchableHighlight>
            </View>
          

        </View>
        
       
    )

};

export default Form;

const styles = StyleSheet.create({

    view:{
        marginTop: 100,
        marginBottom: 20,
        width: "90%",
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',

       // backgroundColor: 'blue',
        paddingVertical: 10,

    }, 

    input:{
        height: 50,
        backgroundColor: "#fff",
        borderColor: "#e2e2e2",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal:10,


        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    }, 

    viewbtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },

    btnCotizar: {
        backgroundColor: '#C37B89',
        padding: 10,
        marginTop: 15,
        width: "80%",
        borderRadius: 10,
        
    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center',
        
    }

})
