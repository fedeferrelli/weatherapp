import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import FormatoMuestraCiudades from './FormatoMuestraCiudades';


const ListadoCiudades = ({listadoCiudades, almacenarCiudades, refresh, setRefresh}) =>{

    const [ciudadesData, setCiudadesData] = useState({});
    

    useEffect(() => {

       // almacenarCiudades(JSON.stringify(listadoCiudades));
      
        const mapLoop = async _ => {
           
          
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
              
            })
          
            const numFruits = await Promise.all(promises);
           setCiudadesData(numFruits);
          

        };
    
        mapLoop();   
    console.log(ciudadesData);
    
 
        
      }, [listadoCiudades, refresh]);


   // console.log(numFruits)
    
    return(
        <View style = {styles.view}>

          {<FlatList
           contentContainerStyle = {styles.flatList}
           data={ciudadesData}
           renderItem={({item}) => <FormatoMuestraCiudades 
                                    ciudadMostrar = {item}
                                    almacenarCiudades = {almacenarCiudades}
                                    listadoCiudades = {listadoCiudades} 
                                    setRefresh = {setRefresh}
                                    refresh = {refresh}/>
                                }
                 
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