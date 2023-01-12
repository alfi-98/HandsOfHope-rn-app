import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Campaigns = ({image}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          source={{
            uri: '/Users/imac/Documents/alfiDev/HandsOfHope/src/assets/images/camp.jpg',
          }}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.cardContentContainer}>
        <Text style={styles.cardTitle}>Clean Forest</Text>
        <Text style={styles.cardDescription}>
          Help the community to clean forest for a better ecosystem
        </Text>

        <View style={styles.collectionPipe}>
          <View style={styles.collectionPipeFilled}></View>
        </View>
        <View style={styles.donationInfo}>
          <View style={styles.donationText}>
            <Text style={styles.amount}>$1,368</Text>
            <Text style={styles.amountText}>Collected</Text>
          </View>
          <Text style={styles.daysLeft}>12 Days Left</Text>
        </View>
        <TouchableOpacity>
        <View style={styles.donateVolunteer}>
          <Text style={styles.donateVolunteerText}>Donate or Volunteer</Text>
            <AntDesign name="arrowright" style={styles.arrowLeft} /> 
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '25%',
    height: 300,
    marginVertical: 10,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    elevation: 5,
    shadowColor: '#9E9E9E',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 2},
  },
  cardImageContainer: {
    width: '100%',
    height: '40%',
  },
  cardImage: {
    width: '92%',
    height: '100%',
    margin: 10,
    borderRadius: 5,
  },
  cardContentContainer: {
    padding: 10,
    height: '60%',
    justifyContent: 'space-around'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
  },
  collectionPipe: {
    width: '100%',
    height: 7,
    borderRadius: 7,
    backgroundColor: '#BAD7E9',
    marginTop: 15,
  },
  collectionPipeFilled: {
    width: '50%',
    height: 7,
    borderRadius: 7,
    backgroundColor: '#6C00FF',
  },
  donationInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  amount: {
    color: '#6C00FF',
    fontSize: 12,
  },
  amountText: {
    fontSize: 12,
    color: '#666',
  },
  donationText: {
    flexDirection: 'row',
  },
  daysLeft: {
    fontSize: 12,
    color: '#666',
  },
  donateVolunteer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  arrowLeft: {
    color: '#6C00FF',
    fontSize: 15,
  },
  donateVolunteerText: {
    color: '#6C00FF',
    fontSize: 12,
    fontWeight: 'bold'
  }
});

export default Campaigns;
