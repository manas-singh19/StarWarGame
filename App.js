/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';

 

import AppStack from './src/navigations';

function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 
  useEffect(()=>{
    console.log("init");
  },[]);

  return (
    <SafeAreaView style={{width:'100%', height:'100%'}}> 
      <AppStack />
    </SafeAreaView>
  );
} 
export default App;
