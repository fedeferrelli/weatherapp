import React from "react";

import { Image, Modal, StyleSheet, Text, ActivityIndicator, View } from "react-native";

const Loading = ({modalVisible, ciudadClimaInput}) => {
  
  return (
    <View /* style={styles.centeredView, styles.fede} */>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        //statusBarTranslucent={!true}
        
       
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Buscando datos para</Text>

            <Image 
            source={require("../../assets/images/loading.png")}
            style={styles.image}/>

            <Text style={styles.modalTextCiti}>{ciudadClimaInput}</Text>

            <ActivityIndicator size = "large" color="black" style = {styles.spinner} />
             
           
          </View>
        </View>

      </Modal>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: '100%',   
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(125, 125, 125, 0.65)',
    marginTop: 55,

    
  },

 
  modalView: {
    margin: 20,
    backgroundColor: "#F0A500",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '70%',


 
    
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  
  modalText: {
    textAlign: "center",
    fontSize: 18,
  }, 
  
  modalTextCiti:{
      fontSize: 30,
      fontWeight: 'bold'
  },

  spinner:{
  marginVertical:20,
  },

  image:{
      width: 250,
      height: 250,
      marginVertical: 50,
  }
});

