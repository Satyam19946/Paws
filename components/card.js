// A  card should have an image, name, and age.
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

const PLACEHOLDER = "PLACEHOLDER"
var currentImage = PLACEHOLDER;


const Card = (props) => {
    const [startState, updateStartState] = useState(1);
    
    return(
            <View style={styles.cardContainer}>
                <View style={styles.image}/>
                <Text> Can u see the card </Text>
            </View>
        );
}

const styles = StyleSheet.create({
    
    cardContainer: {
        backgroundColor: '#fff',
        height: '80%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        placeItems: 'center',
    },

    image: {
        backgroundColor: '#456',
        height: '80%',
        width: '80%',
        maxHeight: '500px',
        maxWidth: '500px',
        borderRadius: '5%',
    }



  });

export default Card;