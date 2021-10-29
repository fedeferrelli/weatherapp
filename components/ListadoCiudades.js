import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import FormatoMuestraCiudades from './FormatoMuestraCiudades';


const ListadoCiudades = ({listadoCiudades}) =>{

    const [ciudadesData, setCiudadesData] = useState({});

/* const mapLoop = async _ => {
  console.log('Start')

  const promises = listadoCiudades.map(async fruit => {
      const appikey = '845ebd863db0aaaf1a949f55e0e7f977';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=${appikey}`;
     try {
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                return {
            resultado
            }}
            catch (error){
                Alert.alert(
                'Oops',
                'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
                [{text: 'Ok'}]
                )
            }
    //return numFruit
  })

  const numFruits = await Promise.all(promises)
  console.log(numFruits)

  console.log('End')
} */
    

    useEffect(() => {



      
        const mapLoop = async _ => {
            console.log('Start')
          
            const promises = listadoCiudades.map(async citi => {
                const appikey = '845ebd863db0aaaf1a949f55e0e7f977';
                      const url = `https://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=${appikey}`;
               try {
                          const respuesta = await fetch(url);
                          const resultado = await respuesta.json();
                          return ( resultado )
                        }
                      catch (error){
                          Alert.alert(
                          'Oops',
                          'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
                          [{text: 'Ok'}]
                          )
                      }
              //return numFruit
            })
          
            const numFruits = await Promise.all(promises);
           setCiudadesData(numFruits);
            console.log(numFruits)

            
        };
    
        mapLoop();   
    console.log(ciudadesData);
    
 
        
      }, [listadoCiudades]);


   // console.log(numFruits)
    
    return(
        <View style = {styles.view}>

          {<FlatList
           contentContainerStyle = {styles.flatList}
           data={ciudadesData}
           renderItem={({item}) => <FormatoMuestraCiudades ciudadMostrar = {item} />}
                 
           //     <FormatoMuestraCiudades ciudadMostrar = {ciudad.item} />
                
           // )}}
           keyExtractor={ciudad => Math.random()}




            />}


        </View>
    );
};

export default ListadoCiudades;

const styles = StyleSheet.create({

    view:{
        width: "96%",
       
        marginBottom: 10,
    }, 
    
    flatList:{
        justifyContent: 'center',
        textAlignVertical: 'center', 
        
        
    }

})