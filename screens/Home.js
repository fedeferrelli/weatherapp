import React, {useState}  from "react";
import { View, ScrollView, StatusBar, StyleSheet } from "react-native";
import AppStructure from '../components/Home/AppStructure';

export default function Home({navigation}){



    return(
       
        <ScrollView >
             <StatusBar barStyle = "light-content" backgroundColor='#700B97' />

        <View style={styles.view}>
            <AppStructure navigation = {navigation}/*  appData = {appData} *//>
            {/* <Text style={styles.emptyText}>
            HOME {'\n\n'}
            La sección de Home deberá mostrar información descriptiva sobre los propósitos de la aplicación tales como nombre de la app, descripción y uso.
            </Text> */}
             </View>
        </ScrollView>
       
    );
};

const styles = StyleSheet.create({

    view:{
      //  width: "100%",
        //justifyContent: 'center',
        alignItems: 'center',
        //alignContent: 'center',
        backgroundColor: 'lightgrey',
       
      
    }, 
    
    scrollview:{
        backgroundColor: 'pink',
        marginHorizontal: 0,
        width: '100%',
        
        
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