import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import OnGoingCampaigns from './OnGoingCampaigns';
import Donations from './Donations';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Campaigns from './Campaigns';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View>
          <Text>Hello</Text>
          <Text style={styles.userName}>User Name</Text>
        </View>
        <View style={styles.notificationIcon}>
        <Ionicons name="ios-notifications-outline" style={styles.Ionicons} /> 
        </View>
      </View>
      <SearchBar />
      <OnGoingCampaigns />
      <View style={styles.donationPage}>
        <Text style={styles.donationLeftText}>Donations</Text>
        <View style={styles.donationRigth}>
          <Text style={styles.donationRigthText}>See all</Text>
          <TouchableOpacity>
            <AntDesign name="arrowright" style={styles.arrowLeft} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal={true} style={styles.scrollView} bounces={true}>
      <View style={styles.CompaignCards}>
        <Campaigns/>
        <Campaigns/>
        <Campaigns/>
      </View>   
      </ScrollView>    
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
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
  },
  donationPage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  arrowLeft: {
    color: '#6C00FF',
    fontSize: 25,
  },
  Ionicons: {
    color: '#6C00FF',
    fontSize: 25,
  },
  donationRigth: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  donationLeftText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  donationRigthText: {
    color: '#6C00FF',
    fontWeight: 'bold',
    fontSize: 15
  },
  CompaignCards: {
    flexDirection: 'row',
    //display: 'flex',
  },
});

export default HomeScreen;
