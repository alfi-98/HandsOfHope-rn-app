import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const handleChange = (text) => {
        setSearchText(text)
    }
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                onChangeText={text => handleChange(text)}
                value={searchText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    searchInput: {
        fontSize: 18,
    }
});

export default SearchBar;
