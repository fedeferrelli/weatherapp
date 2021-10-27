import React from 'react';
import {View, StyleSheet, Tetx} from 'react-native';
import axios from 'axios';



const Weather = () =>{

    const Apikey = '845ebd863db0aaaf1a949f55e0e7f977';
   
    

    return(

    axios.get('api.openweathermap.org/data/2.5/weather?q={London}&appid={845ebd863db0aaaf1a949f55e0e7f977}')
    .then((response) => {
        // handle success
        console.log(response);
      })

    );
}


export default Weather;