import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Donations = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My Page</Text>
            <Text style={styles.text}>This is a basic React Native page.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
    },
});

export default Donations;
