import React from "react";

import { Image, Modal, StyleSheet, Text, ActivityIndicator, View } from "react-native";

const Loading = ({modalVisibleMapas, ciudad}) => {
  
  return (
    <View >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleMapas}
        
       
      >
        {<View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Mostrando en el mapa</Text>

            <Image 
            source={require("../../assets/images/loadingmap4.png")}
            style={styles.image}/>

            <Text style={styles.modalTextCiti}>{ciudad}</Text>

            <ActivityIndicator size = "large" color="black" style = {styles.spinner} />
             
           
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
      width: 200,
      height: 200,
      marginVertical: 50,
  }
});

