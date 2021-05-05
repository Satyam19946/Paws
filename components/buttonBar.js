import React, { useState } from 'react';
import {StyleSheet, Button, TouchableOpacity, View} from 'react-native';
import RoundButton from './roundButton.js';


const buttonBar = (props) => {
    const [currentButton, updateCurrentButton] = useState(1);

    return (
        <View style={styles.buttonBar}>
            <RoundButton buttonSize={80}/>
            <RoundButton buttonSize={80}/>
            <RoundButton buttonSize={80}/>
            <RoundButton buttonSize={80}/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBar: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: '100%',
        color: '#123',
    },

    roundButton: {
        borderWidth: 3,
        maxWidth: '50px',
        maxHeight: '50px',
        margin: '0 50px 0 50px',
        borderRadius: '25px',
        width: '50px',
        height: '50px',
    }
})

export default buttonBar;