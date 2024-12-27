import 'react-native-gesture-handler'; 
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
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Main from './src/Main';                                                // メイン画面
import HigamatsuMission from './src/HigamatsuMission';    // ひがまつTHEミッション!の画面
import YasaiHakase from './src/YasaiHakase';                        // やさい博士の画面
import EiyoHakase from './src/EiyoHakase';                          // えいよう博士の画面
import Gakutabe from './src/Gakutabe';                                // ガクタベクイズの画面

const Stack = createStackNavigator();    //追記



const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={
            {
              headerTitle: 'ひがまつこどもヘルスサポート', 
              headerTintColor: 'blue'
            }
          }
        />
        <Stack.Screen
          name="HigamatsuMission"
          component={HigamatsuMission}
          options={
            {
              headerTitle: 'ひがまつこどもヘルスサポート',
              headerTintColor: 'green'
            }
          }
        />
        <Stack.Screen
          name="YasaiHakase"
          component={YasaiHakase}
          options={
            {
              headerTitle: 'ひがまつこどもヘルスサポート',
              headerTintColor: 'green'
            }
          }
        />
        <Stack.Screen
          name="EiyoHakase"
          component={EiyoHakase}
          options={
            {
              headerTitle: 'ひがまつこどもヘルスサポート',
              headerTintColor: 'green'
            }
          }
        />
        <Stack.Screen
          name="Gakutabe"
          component={Gakutabe}
          options={
            {
              headerTitle: 'ひがまつこどもヘルスサポート',
              headerTintColor: 'green'
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
