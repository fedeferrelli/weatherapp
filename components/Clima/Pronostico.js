import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
   

const Pronostico = ({
    daily}) =>{

        const obtenerFecha = (n) => {
        
            const d = new Date(n*1000)
    
            const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
            const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
           
            const dayName = weekDays[(d.getDay())]; 
            const dayNumber = d.getDate();
            const month = months[d.getMonth()];
    
            return (`${dayName}, ${dayNumber} de ${month}`)
          
        }
console.log(daily[1].dt)

    return(
        <View style={styles.view}>
       {/*      <View style={styles.sides}>
                <Text style = {styles.ext}>  máxima: {parseInt(max)}º</Text>
                <Text style = {styles.ext}>  viento: {wind} km/h</Text>
                <Text style = {styles.ext}>  salida del sol: {obtenerHora(sunrise)} </Text>
            </View>

            <View style={styles.sides}>
               
                <Text style = {styles.ext}>  mínima: {parseInt(min)}º</Text>
                <Text style = {styles.ext}>  humedad: {humidity}%</Text>
                <Text style = {styles.ext}>  puesta del sol: {obtenerHora(sunset)} </Text>      
            </View> */}

           {/*  <Text>{daily[1].temp.max}</Text> */}
        </View>
    )




};

export default Pronostico;


const styles = StyleSheet.create({

 

  view:{
    flexDirection: 'row',
   
    width: '90%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 30,
    borderColor: '#F0A500',
    borderWidth: 0.5,
    backgroundColor: 'lightgrey',
    
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,

  },

 sides:{
     width: '50%',
     justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    paddingVertical: 20

 },

ext:{
   
    fontSize: 16,
    marginTop: 0,
    marginVertical:10,
}

})