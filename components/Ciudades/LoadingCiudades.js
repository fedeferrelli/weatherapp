import React, { useState } from "react";

import { Image, Modal, StyleSheet, Text, ActivityIndicator, View } from "react-native";

const Loading = ({modalVisibleCiudades, setModalVisibleCiudades, ciudadInput}) => {
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleCiudades}
        
       
      >
        {<View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Guardando datos de</Text>

            <Image 
            source={require("../../assets/images/uploading.png")}
            style={styles.image}/>

            <Text style={styles.modalTextCiti}>{ciudadInput}</Text>

            <ActivityIndicator size = "large" color="#F0A500" style = {styles.spin} />
             
           
          </View>
        </View>}

      </Modal>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
   
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
   // backgroundColor: 'rgba(125,125, 125, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
   // marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  }, 
  modalTextCiti:{
      fontSize: 30,
      fontWeight: 'bold'
  },

  spin:{
  marginVertical:20,
  },

  image:{
      width: 250,
      height: 250,
      marginVertical: 50,
  }
});

