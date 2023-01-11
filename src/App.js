import React from 'react';
import { Provider } from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet,SafeAreaView} from 'react-native';
import HomeScreen from './screens/HomeScreen';

const  App = () => {
    return (  
      <SafeAreaView>
        <HomeScreen/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    
  },
  
});

export default App;

