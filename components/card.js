/**
 * Written by - Satyam Gupta
 * Date - 5/5/2021
 * 
 * A card acts like a card on Tinder - containing all the relevnat information of a person
 * This information includes photos, name, age, passions, summary, details, etc.
 */
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

const Card = (props) => {
    const [startState, updateStartState] = useState(1);

    const [currentImage, updateCurrentImage] = useState('../assets/images/image1.jpg');

    /**
     * Handles what happens when you click on the card.
     * 
     * Click Left -> go forward in the deck
     * Click Right -> go backward in the deck
     * 
     */
    function onCardPress(e) {
        console.log(e.pageX);
        console.log(window.innerWidth);
        if (e.pageX / window.innerWidth > 0.5){
            console.log('right');
        } else {
            console.log('left');
        }
    }

    return(
                <TouchableOpacity
                    onPress={(event) => onCardPress(event)}
                    activeOpacity={1}
                    typeOfTouch={'left'}
                    style={styles.cardContainer}
                    >
                <Image style={styles.image} source={require("../assets/images/card1image1.jpg")}/>
                </TouchableOpacity>
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
        maxWidth: '414px',
    },

    image: {
        height: '100%',
        width: '100%',
        maxWidth: '414px',
    }
  });

export default Card;