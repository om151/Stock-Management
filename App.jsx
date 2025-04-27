import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import Home from './src/Screens/Home';



import {enableScreens} from 'react-native-screens';

enableScreens();



   

const App = () => {
  return (
    
    <View>
     <Home/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
