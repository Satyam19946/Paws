import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RoundButton = (props) => {
    let styleForThisButton = styles(props);

    return (
        <View style={styleForThisButton.container}>
            <TouchableOpacity
                onPress = {() => this.buttonPressed()}
                activeOpacity={.8}
                style={styleForThisButton.button}
            >
                <Image style={styleForThisButton.image} source={require('../assets/icons/heart.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = (props) => StyleSheet.create({

    container: {
        position: 'relative',
    },

    button: {
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 3,
        borderRadius: (props.buttonSize) / 2,
        width: props.buttonSize,
        height: props.buttonSize,
        marginLeft: '6px',
        marginRight: '6px',
    },

    image: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
    }
})

export default RoundButton;