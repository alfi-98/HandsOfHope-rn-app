import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OnGoingCampaigns = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContentContainer}>
                <Text style={styles.cardTitle}>Hello</Text>
                <Text style={styles.cardDescription}>Hello</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: "90%",
        height: 300,
        marginVertical: 10,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: '#fff',
        elevation: 5
    },
    cardImageContainer: {
        width: "100%",
        height: "60%",
    },
    cardImage: {
        width: "100%",
        height: "100%"
    },
    cardContentContainer: {
        padding: 10,
        height: "40%"
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    cardDescription: {
        fontSize: 18,
        color: "#666",
    }
});

export default OnGoingCampaigns;
