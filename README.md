# HELA2
## Descripción

Aplicación realizada en React Native.Se puede utilizar para consultar el clima de un conjunto de ciudades. Esta app nos permite además agregar varias ciudades para luego consultar el clima de las mismas, también podremos ver su ubicación en el mapa y un resumen de la temperatura en el mismo.
El proyecto fue realizado a pedido de una vendedora de helados la cual ,para cubrir la demanda, necesitaba estar al tanto del clima de los lugares en los que vende su producto.

[PERSONA CANVAS](https://drive.google.com/file/d/1QBJtl6rgolJCoW8UG_xfVqEensgCor79/view?usp=sharing)

El siguiente enlace es el prototipado que se le mostro a la clienta para luego realizar la APP

[PROTOTYPING CLIMATE](https://drive.google.com/file/d/1_uWMvVBEYprK4Ypll7d4X_6_V4HwTp08/view?usp=sharing)


# INSTALACIÓN
Para poder ejecutar el proyecto en otro equipo, se necesitan instalar las siguientes aplicaciones:

* [NODE JS](https://nodejs.org/es/)
* [YARN](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
* [EXPO-CLI](https://docs.expo.dev/workflow/expo-cli/)
   -  Ejecutar el siguiente comando en el terminal  ```yarn global add expo-cli```
* [Android Studio](https://developer.android.com/studio) - Emulador ANDROID


También es necesario instalar las librerías que se listan a continuación:

| Librerias | Versión |
| ------------- | ------------- |
|@react-native-async-storage/async-storage|1.15.13|
|@react-native-community/masked-view| 0.1.6|
|@react-native-picker/picker"| react-native-picker/picker|
|@react-navigation/bottom-tabs| 5.10.0|
|@react-navigation/drawer| 5.10.0|
|@react-navigation/native| 6.0.6|
|@react-navigation/native-stack| 6.2.5|
|@react-navigation/stack| 5.10.0|
|expo| 43.0.0|
|expo-status-bar| 1.1.0|
|react| 17.0.1|
|react-dom| 17.0.1|
|react-native| 0.64.3|
|react-native-elements| 3.4.2|
|react-native-gesture-handler| 1.10.2|
|react-native-maps| 0.28.1|
|react-native-reanimated| 2.2.0|
|react-native-safe-area-context| 3.3.2|
|react-native-screens| 3.8.0|
|react-native-web| 0.17.1|

Para hacerlo se deberá ejecutar en el terminal la siguiente secuencia de comandos

yarn add "libreria"@~version

por ejemplo:

```yarn add @react-navigation/native@~6.0.6```

Luego deberemos ejecutar en el terminal el siguiente comando para crear la aplicación en Expo

```expo init weatherapp```

Descargar el repositorio de Github y sobreescribir el contenido de la carpeta weatherapp creada anteriormente.

Por último ejecutar en el terminal el comando

```expo start```

Esto nos abrirá nuestro navegador predeterminado donde habrá un código QR que podremos escanear desde la app EXPO GO, cuya instalación se explica más abajo en la Opción 1.
Todos esa secuencia de pasos explicada nos permitirá, aparte de ver la app en funcionamiento ,poder editarla y realizar los cambios que queramos.


# USO

Si simplemente queremos probar o usar la APP en un dispositivo ANDROID, deberemos hacer lo siguiente: 

###### Opción 1


* Instalar en nuestro smartphone la aplicación:
   - [EXPO GO](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_AR&gl=US) 
   
* Crear un usuario desde la [página de EXPO](https://expo.dev/signup)
* Loguearnos con el usuario creado en la APP de EXPO instalada en el Smartphone


Iniciar la APP escaneando el siguiente código QR. (Recordar tener instalado previamente en el celular EXPO GO y tener una cuenta como se explicó anteriormente)
<br>
![Código QR](/../main/assets/images/QR.png)

o bien abriendo el siquiente enlace:

[Abrir enlace](exp://exp.host/@ggirolim/climate)


###### Opción 2

Descargando e instalando el siguiente APK :

[DESCARGAR APK]

(Recordar que como es una aplicación externa nos aparecerán varios mensajes de seguridad los cuales deberemos ignorar o aceptar según el caso)

# DOCUMENTACIÓN
En el siguiente documento se explica, resumidamente, el propósito y la función de los componentes creados en la APP.

La solución diseñada tiene 4 stacks:

1. HomeStack
2. CiudaesStack
3. ClimaStack
4. AboutStack

###### HomeStack

Este Stack tiene como objetivo saludar al usuario y explicarle brevemente lo que podrá hacer con la apliación. Además se le proveen los botones para acceder de manera más rápida a cada funcionalidad.

Posee una sola pantalla (Home) que se alimenta del componente AppStructure.

###### CiuadadesStack

Este stack es el más completo de los cuatro. Su objetivo es que el usuario pueda ingresar y ver (junto a un breve resumen de las condiciones climáticas actuales) las ciudades que quiera en su lista particular. Además, puede observar cada una de las ciudades listadas en un mapa.

Este stack tiene dos pantallas: Ciudades y Mapa.

La pantalla Ciudades se integra de 3 componentes: Form, ListadoCiudades y LoadingCiudades. 

El componente Form es uno de los más importantes porque es el único en toda la aplicación por el cual el usuario ingresa la información. Aquí el usuario ingresa el nombre de una ciudad que quiera listar y, mediante la función crearCiudad, se puede llegar a cuatro desenlaces: 
   a) si el campo está vacío se devuelve un alerta, 
   b) si el campo no está vacío se hace un llamado a la API Weather API (https://openweathermap.org/api) y se coteja lo ingresado. Si la ciudad ingresada no figura en la API entonces se dispará un alerta 
   c) si la ciudad ingresada sí existe entonces se controla que no esté ya incorporada en la lista (previamente cargada desde la memoria vía AsyncStorage): si está ern la lista entonces se dispara una alerta
   d) si el campo ingresado no es vacío, la ciudad existe en la API y esa ciudad no está en la lista, entonces se agrega a la lista. 
   
El componente ListadoCiudades tiene como objeto listar cada una de las ciudades de la lista junto a la la temperatura y el icono de la condición actual del clima. Además, consta la posibilidad de eliminar la ciudad de la lista. Para llevar a cabo esta tarea se vale de: 1) la función mapLoop que obtiene las condiciones climáticas de cada una de las ciudades de la lista y 2) el componente FormatoMuestraCiudades que elabora un listado de esa información a través de un FlatList.

La pantalla Mapa se alcanza a traves de navegar desde el FlatList: al presionar el nombre de la ciudad se traslda la información al componente Mapping y se muestra el mapa con un pin de la ciudad presionada (además, al presionar ese pin se despliega un cuadro con el nombre de la ciudad, la temperatura y condición climática actual). 


###### ClimaStack

La funcionalidad de este Stack está relacionada con poder acceder a un mayor detalle de las condiciones climáticas actuales y al pronóstico extendedido a una semana de una ciudad determinada. Posee una sola pantalla (clima) que hace uso de 3 componentes: Loading, FormClima, ObtenerClima

A través del FormClima se accede a un picker que permite elegir alguna de las ciudades listadas en el stack de ciudades.

Una vez seleccionada la ciudad, se obtiene la latitud y longitud y se pasa al componnete ObtenerClima que hace un pedido de información (amplia) llamando a Weather API. Finalmente, esa información es pasada a otros dos componentes (relacionados unicamente con ObtenerClima): Current (que retorna la información relacionada a las condciones del día de la fecha) y a CurrentExtended (que se ocupa de retornar el pronóstico extendido para los próximos 7 días).   

###### AboutStack

Por último, en este stack solamenete figura información relacionada a los integrantes del grupo y características elemntales del presente proyecto.



