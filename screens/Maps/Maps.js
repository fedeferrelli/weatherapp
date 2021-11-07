import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Maps(){
    return(
        <View style={styles.view}>
            <Text style={styles.emptyText}>
             MAPS {'\n\n'}
            La sección de Maps deberá mostrar las ciudaes ingresadas en un mapa
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    view:{
        width: "100%",
        marginBottom: 110,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    

    emptyText:{
        width: '85%',
        marginTop: 100,
        paddingVertical: 30,
        paddingHorizontal: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#700B97',
        textAlign: 'center',
        color: 'grey',
        fontSize: 15,


    }

})