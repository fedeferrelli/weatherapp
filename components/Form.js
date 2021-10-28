import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableHighlight, 
    TouchableWithoutFeedback, Alert} from 'react-native';

const Form = ({ciudadInput, setCiudadInput, listadoCiudades, setListadoCiudades}) => {

     const [check, setCheck] = useState(false)
    
    
    useEffect(() => {

        const agregarListado = async () =>{
            if(ciudadInput==="fede"){
               
            }
            else if (ciudadInput===""){
                Alert.alert(
                    'Oops',
                    'Debes ingresar una ciudad',
                    [{text: 'Ok'}]
                )
            }
            else {
                const appikey = '845ebd863db0aaaf1a949f55e0e7f977';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadInput}&appid=${appikey}`;
          
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();

                    if(resultado.name){
                        if(listadoCiudades.includes(resultado.name)){
                            Alert.alert(
                                'Oops',
                                'Parece que la ciudad que ingresaste ya figura en la lista',
                                [{text: 'Ok'}]
                            )
                        }
                        else{
                            setListadoCiudades([...listadoCiudades, resultado.name]) 
                        }               
                    } 
                    else { 
                        Alert.alert(
                        'Oops',
                        'Parece que la ciudad que ingresaste no existe. Por favor verifica que esté bien escrita',
                        [{text: 'Ok'}]
                    )};
                }
                catch (error){
                    Alert.alert(
                    'Oops',
                    'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
                    [{text: 'Ok'}]
                    )
                }
            };             
      };
      agregarListado();
      }, [check]);


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
                onPress={ () => setCheck(!check) }
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
