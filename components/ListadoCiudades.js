import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import FormatoMuestraCiudades from './FormatoMuestraCiudades';


const ListadoCiudades = ({listadoCiudades}) =>{
    
    return(
        <View style = {styles.view}>

            <FlatList
            data={listadoCiudades}
            renderItem={(ciudad) => (
                <FormatoMuestraCiudades ciudadMostrar = {ciudad.item} />
                
            )}
            keyExtractor={(ciudad) => ciudad}




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