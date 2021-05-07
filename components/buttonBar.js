/**
 * Written by - Satyam Gupta
 * Date - 5/5/2021
 * 
 * Template for the button bar that stays at the bottom and contains the 4 rounded buttons.
 */
import React, { useState } from 'react';
import {StyleSheet, Button, TouchableOpacity, View} from 'react-native';
import RoundButton from './roundButton.js';


const buttonBar = (props) => {
    const [currentButton, updateCurrentButton] = useState(1);

    return (
        <View style={styles.buttonBar}>
            <RoundButton styles={styles.buttonBar} buttonSize={80} typeOfButton={'reverse'}/>
            <RoundButton styles={styles.buttonBar} buttonSize={80} typeOfButton={'superlike'}/>
            <RoundButton styles={styles.buttonBar} buttonSize={80} typeOfButton={'like'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBar: {
        flex: 1,
        alignSelf: 'center',
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: '100%',
        color: '#123',
        backgroundColor: '#ececec', 
        maxWidth: '414px',
    },
    
    roundButton: {
        borderWidth: 3,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        maxWidth: '112px',
        maxHeight: '108px',
        margin: '0 50px 0 50px',
        borderRadius: '25px',
        width: '50px',
        height: '50px',
    }
})

export default buttonBar;