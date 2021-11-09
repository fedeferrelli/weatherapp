import React, {useState} from 'react';

const AppData = () =>{
    

    const [appData, setAppData] = useState([])

    setAppData({ "img" : "require('DIR y NOMBRE')", "title" : "Ciudades",
        
        
        "text" : "En esta sección podras agregar (y eliminar) las ciudades que quieras incorporar al seguimiento. Las verás reflejadas en forma de lista con un resumen de la temperatura y consiciones climáticas del momento",
        
        
        "navigateTo" : "ciudades"   
        
        });
}