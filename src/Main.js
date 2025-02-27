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
  Image                         // 画像を表示するために必要
} from 'react-native';

const Main: () => Node = (props) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../img/eateina.jpg')}/>

            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('HigamatsuMission')}>
                <Text style={styles.typography}> ひがまつ THE ミッション！ </Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('YasaiHakase')}>
                <Text style={styles.typography}> やさい博士 VER.2 </Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('EiyoHakase')}>
                <Text style={styles.typography}> えいよう博士 VER.2 </Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Gakutabe')}>
                <Text style={styles.typography}> ガクタベクイズ </Text>
             </TouchableOpacity>
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        fontSize:30
    },

    image: {
        alignItems: 'center',
        marginTop:40,
        width:400,
        resizeMode: 'contain'
      },

      typography: {
        color: 'white',
        fontSize:30
      },

      button: {
        alignItems: 'center',
        marginBottom:10,
        width:400,
        padding:10,
        backgroundColor: 'purple'
      },
});
 
  export default Main;
