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

const HigamatsuMission: () => Node = (props) => {

  return (
    <View style={styles.container}>
      <Text>今日はどっちのキャラクターにする？</Text>

            <Image style={styles.image} source={require('../img/eat.jpg')}/>

             <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('YasaiHakase')}>
                <Text style={styles.typography}> イートくん </Text>
             </TouchableOpacity>

             <Image style={styles.image} source={require('../img/eina.jpg')}/>

             <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('YasaiHakase')}>
                <Text style={styles.typography}> イ～ナちゃん </Text>
             </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
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

export default HigamatsuMission;
