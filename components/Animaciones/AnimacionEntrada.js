import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, View, StatusBar} from 'react-native';
import imagen from '../../assets/images/HELADOS.png';


const AnimacionEntrada = ({setAnimated}) => {
   

   /* const [position] = useState(new Animated.Value(0));
   const [position1] = useState(new Animated.Value(000));
   const [position2] = useState(new Animated.Value(000)); */
   const [show] = useState(new Animated.Value(0));
   const [font] = useState(new Animated.Value(1));

   useEffect(() => {
     Animated.parallel([
      /*  Animated.timing(position, {
         toValue: 0,
         duration: 2000,
         useNativeDriver: false,
       }), */
       /* Animated.timing(position1, {
        toValue: -900,
        duration: 2000,
        delay: 500,
        useNativeDriver: false,
      }),
      Animated.timing(position2, {
        toValue: -900,
        duration: 2000,
        delay: 1000,
        useNativeDriver: false,
      }), */
       Animated.timing(show, {
         toValue: 1,
         duration: 2500,
         //delay: 2000,
         useNativeDriver: false,
       }),
     ]).start(() =>
       Animated.timing(font, {
         toValue: 1.3,
         duration: 2500,
        // delay: 1000,
         useNativeDriver: false,
       }).start(() => setAnimated(true)),
     );
   }, []);

   
     return (
       <>
         <StatusBar
           animated={true}
           backgroundColor='#F0A500'
           barStyle="light-content"
         />
         <View style={styles.container}>
           <Animated.Image
             style={[styles.image, {opacity: show , transform: [{scale: font}] }]}
             source={imagen}
           />

         {/*    <Animated.Image
             style={[styles.image, {top: position1,  right: 0}]}
             source={imagen}
           />

            <Animated.Image
             style={[styles.image, {top: position2, opacity:0.5,  right: 50}]}
             source={imagen}
           /> */}


           {/* <Animated.Text
             style={[styles.text, {opacity: show, transform: [{scale: font}]}]}>
            Hola!

           </Animated.Text> */}


         </View>
       </>
     );
  
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: 'rgba(125, 125, 125, 0.2)',
     justifyContent: 'center'
    
    },

   image: {
     width: '80%',
     //height: '50%',
     resizeMode: 'contain',
    
   },

   text: {
     fontSize: 40,
     color: '#F0A500',
   },
});

export default AnimacionEntrada;

