/**
 * Written by - Satyam Gupta
 * Date - 5/5/2021
 * 
 * A card acts like a card on Tinder - containing all the relevnat information of a person
 * This information includes photos, name, age, passions, summary, details, etc.
 */
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';

const PLACEHOLDER = "PLACEHOLDER"
var currentImage = PLACEHOLDER;


const Card = (props) => {
    const [startState, updateStartState] = useState(1);
    
    return(
            <View style={styles.cardContainer}>
                <Image style={styles.image} source={require("../assets/images/image1.jpg")}/>
            </View>
        );
}

const styles = StyleSheet.create({
    
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        height: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    image: {
        height: '100%',
        width: '100%',
        maxWidth: '414px',
        maxHeight: '750px',
    }



  });

export default Card;