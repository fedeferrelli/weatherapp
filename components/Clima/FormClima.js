import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TextInput, StyleSheet, Button, TouchableHighlight, 
    TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const FormClima = ({ciudadClimaInput, setCiudadClimaInput, listadoClimaCiudades, setCiudad, trigger, setTrigger, setLatitudCiudad, setLongitudCiudad, setShowScreen
}) => {

     

 // Crear y agregar ciudades

 const latAndLongCiudad = async () => {

        const appikey = '845ebd863db0aaaf1a949f55e0e7f977';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadClimaInput}&lang=es&appid=${appikey}`;
        
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setLatitudCiudad(resultado.coord.lat);
            setLongitudCiudad(resultado.coord.lon)
            setCiudad(resultado.name)


        }
        catch (error){
            Alert.alert(
            'Oops',
            'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
            [{text: 'Ok'}]
            )
        }

       setTrigger(true)
    };  
    
    
 

     

      
const btnAction = () =>{
//setCheckInput(true);
latAndLongCiudad();
setShowScreen(true)
Keyboard.dismiss();

};


    return(
        
        
        <View style = {styles.view}>

            <View style={styles.form}>

            <View style = {styles.input}>
            <Picker
                selectedValue={ciudadClimaInput}
                onValueChange={ ciudad => (setCiudadClimaInput(ciudad)) }
                style={{ height: 60 }}
                /* prompt={"Que ciudad queres ver?"} */
                dropdownIconColor={'#fff'}
                dropdownIconRippleColor={'#fff'}
                
            >
                <Picker.Item  label="Que ciudad deseas ver?" value="" style={{ fontSize: 18 }}/> 
                {listadoClimaCiudades.map( cripto => (
                    <Picker.Item key={cripto} label={cripto} value={cripto}  style={{ fontSize: 18 }}/> 
                ))}
            </Picker>
            </View>
           
           {/*  <TextInput
            placeholder = 'Qué ciudad querés ver?'
            placeholderTextColor = "rgb(125, 125, 125)"
            defaultValue = {ciudadClimaInput}
            onChangeText = { ciudad => (setCiudadClimaInput(ciudad))}
            
            style = {styles.input}
            /> */}
           
            
           <View style={styles.viewbtn}>
            <TouchableHighlight
                style={styles.btnAgregar}
                onPress={ () => btnAction() }
            >
                <Text style={styles.textoCotizar}>ir</Text>
            </TouchableHighlight>
            </View>



         







            </View>

        </View>
        
       
    )

};

export default FormClima;

const styles = StyleSheet.create({

    view:{
        marginTop: 0,
        marginBottom: 0,
        width: "100%",
     height: 80,
     marginTop: 0,
     
     justifyContent: 'center',
     textAlign: 'center',
     alignItems: 'center',
     height:100,

     //backgroundColor: 'lightgrey',

    }, 

    form:{
        flexDirection: "row",
        flexWrap: "wrap",
        width: '90%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
       



       // backgroundColor:'grey',
        
    },

    input:{
        


        height: 60,
        backgroundColor: "#fff",
       // borderColor: "#e2e2e2",
       // borderWidth: 1,
       //borderRadius: 10,
       paddingHorizontal:10,
       // borderTopLeftRadius: 5,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,



        
        width:'85%',
        marginRight: 0,
        marginVertical: 20,

      
        //backgroundColor:'lightgrey',


        shadowColor: "#000",
        shadowOffset: {
        width: 0,
	    height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 10,

    }, 

    viewbtn:{
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',

        
        
    },

    btnAgregar: {
        backgroundColor: '#C37B89',
        //padding: 10,
       justifyContent: 'center',
       textAlignVertical: 'center',

        width: "100%",
       
       height: 60,
      borderTopRightRadius: 15,
       borderBottomRightRadius: 15,

       shadowColor: "#000",
       shadowOffset: {
       width: 0,
       height: 3,
       },
       shadowOpacity: 0.27,
       shadowRadius: 4.65,

       elevation: 10,
        
    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 25,
        textTransform: 'uppercase',
        textAlign: 'center',
        
    }

})