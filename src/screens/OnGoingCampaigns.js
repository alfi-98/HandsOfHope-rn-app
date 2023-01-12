import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OnGoingCampaigns = () => {
    return (
        <View style={styles.cardContainer}>
        <Image
                    source={{uri: '/Users/imac/Documents/alfiDev/HandsOfHope/src/assets/images/volunteer.png'}}
                    style={styles.cardImage}
                />
            <View style={styles.cardContentContainer}>
                <View>
                <Text style={styles.cardHeading}>Active Campaigns</Text>
                <Text style={styles.cardTitle}>Cloth for Winter</Text>
                </View>
                <Text style={styles.cardDescription}>Raised so far $3,000</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardHeading: {
        color: 'white',
    },
    cardContainer: {
        width: "100%",
        height: 150,
        marginVertical: 10,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: '#6C00FF',
        elevation: 5,
        flexDirection : 'row',
        alignItems: 'center',
    },
    cardImageContainer: {
        width: "20%",
        height: "20%",
    },
    cardImage: {
        width: 50,
        height: 50,
        marginLeft: 10
    },
    cardContentContainer: {
        padding: 15,
        height: "80%",
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: 'white'
    },
    cardDescription: {
        fontSize: 18,
        color: "white",
    }
});

export default OnGoingCampaigns;
