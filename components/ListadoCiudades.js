import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import FormatoMuestraCiudades from './FormatoMuestraCiudades';


const ListadoCiudades = ({listadoCiudades}) =>{

    const [ciudadesData, setCiudadesData] = useState([]);

    useEffect(() => {

        listadoCiudades.map(ciudad => {

        const getDataCities = async () =>{
                const appikey = '845ebd863db0aaaf1a949f55e0e7f977';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appikey}`;
          
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    setCiudadesData([...ciudadesData, resultado])
                   // console.log(resultado)
                    console.log(ciudadesData)
                }
                catch (error){
                    Alert.alert(
                    'Oops',
                    'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
                    [{text: 'Ok'}]
                    )
                }
            }; getDataCities()             
        }
        );

        
      }, [listadoCiudades]);


      //console.log(ciudadesData)
    
    return(
        <View style = {styles.view}>

            <FlatList
           data={ciudadesData}
           renderItem={({item}) => (

            <Text> {item.main.temp} </Text>
           )}
                 
           //     <FormatoMuestraCiudades ciudadMostrar = {ciudad.item} />
                
           // )}}
           keyExtractor={ciudad => Math.random()}




            />


        </View>
    );
};

export default ListadoCiudades;

const styles = StyleSheet.create({

    view:{
        width: "95%",
       // backgroundColor: 'black',
        marginBottom: 180,
    }

})