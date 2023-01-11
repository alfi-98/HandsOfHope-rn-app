import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import OnGoingCampaigns from './OnGoingCampaigns';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View>
          <Text>Hello</Text>
          <Text style={styles.userName}>User Name</Text>
        </View>
        <View style={styles.notificationIcon}>
          <Text>No</Text>
        </View>
      </View>
      <SearchBar/>
      <OnGoingCampaigns/>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  },    
  nav: {
    marginTop: 20,
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  notificationIcon: {
      width: 35,
      height: 35,
      backgroundColor: 'rgba(210, 225, 234)',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',

  }
});

export default HomeScreen;
