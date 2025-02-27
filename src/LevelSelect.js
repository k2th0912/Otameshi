import React,{ useState,useEffect,useRef,Component,useContext } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';

const LevelSelect = ({route}) => {
  
  let imageFile;

  if (route.params.id == 1){
    imageFile = require('../img/eat.jpg');
   }
  else {
    imageFile = require('../img/eina.jpg');
  }
  return (
    <View>
      <Text>ミッションをえらんでね！</Text>
      <Text></Text>
      <Image style={styles.image} source={imageFile}/>
    </View>
  );};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      fontsize : 40
  },

  image: {
      alignItems: 'center',
      marginTop:30,
      height:200,
//      width:150,
      resizeMode: 'contain'
    },

    typography: {
      color: 'white'
    },

    button: {
      alignItems: 'center',
      marginBottom:10,
      width:150,
      padding:10,
      backgroundColor: 'purple'
    },
});

export default LevelSelect;
