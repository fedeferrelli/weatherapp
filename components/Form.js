import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableHighlight, 
    TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';

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
      
      const btnAction = () =>{
        setCheck(!check);
        Keyboard.dismiss();

      }

    return(
        
        
        <View style = {styles.view}>

            <View style={styles.form}>
            <TextInput
            placeholder = 'Ingresa una ciudad'
            placeholderTextColor = "rgb(125, 125, 125)"
            defaultValue = ""
            onChangeText = { ciudad => (setCiudadInput(ciudad))}
            
            style = {styles.input}
            />
           
            
           <View style={styles.viewbtn}>
            <TouchableHighlight
                style={styles.btnAgregar}
                onPress={ () => btnAction() }
            >
                <Text style={styles.textoCotizar}>+</Text>
            </TouchableHighlight>
            </View>
            </View>

        </View>
        
       
    )

};

export default Form;

const styles = StyleSheet.create({

    view:{
        marginTop: 0,
        marginBottom: 0,
        width: "100%",
    


    

    

     backgroundColor:'#700B97',
     height: 100,
     
     justifyContent: 'center',
     alignItems: 'center',

    }, 

    form:{
        flexDirection: "row",
        flexWrap: "wrap",
        width: '90%',
        justifyContent: 'center',
     textAlign: 'center',
     alignItems: 'center',

     
    },

    input:{

        height: 50,
        backgroundColor: "#fff",
       // borderColor: "#e2e2e2",
       // borderWidth: 1,
       //borderRadius: 10,
       paddingHorizontal:10,
       // borderTopLeftRadius: 5,
        borderBottomLeftRadius: 15,



        
        width:'85%',
        marginRight: 0,
        marginVertical: 20,





    }, 

    viewbtn:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        marginLeft: 0,
    },

    btnAgregar: {
        backgroundColor: '#C37B89',
        //padding: 10,
       justifyContent: 'center',
       textAlignVertical: 'center',

        width: "100%",
       
       height: 50,
      borderTopRightRadius: 15,
       // borderBottomRightRadius: 5,
        
    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 25,
        textTransform: 'uppercase',
        textAlign: 'center',
        
    }

})