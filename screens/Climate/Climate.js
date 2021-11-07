import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Climate(){
    return(
        <View style={styles.view}>
            <Text style={styles.emptyText}>
            CLIMATE {'\n\n'}
            La sección de Climate deberá mostrar el pronostico actyual y extendido de la ciudad que se elija
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