/**
 * Written by - Satyam Gupta
 * Date - 5/5/2021
 * 
 * Generic Template for a round button that when clicked performs the appropriate function.
 */
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LikeIcon from './likeIcon.js';

const typeOfButtons = ['like', 'dislike', 'superlike', 'reverse'];

const RoundButton = (props) => {
    let styleForThisButton = styles(props);

    const typeOfButton = props.typeOfButton;

    const buttonPressed = () => {
        console.log(typeOfButton);
        console.log(document.getElementById('myCard'));
    }

    // let sourceUrl = "../assets/icons/heart.png";

    // if (props.sourceUrl){
    //     sourceUrl = props.sourceUrl;
    //     console.log(sourceUrl);
    // }

    return (
        <View style={styleForThisButton.container}>
            <TouchableOpacity
                onPress = {() => buttonPressed()}
                activeOpacity={.8}
                style={styleForThisButton.button}
            >
                {/* <LikeIcon/> */}
                <Image style={styleForThisButton.image} source={require("../assets/icons/heart.png")}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = (props) => StyleSheet.create({

    container: {
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
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

{/* <svg width="75" height="81" viewBox="0 0 75 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.5 78.4688C56.9163 78.4688 72.6562 61.4696 72.6562 40.5C72.6562 19.5304 56.9163 2.53125 37.5 2.53125C18.0837 2.53125 2.34375 19.5304 2.34375 40.5C2.34375 61.4696 18.0837 78.4688 37.5 78.4688Z" fill="#4FD1D9"/>
<path d="M51.6797 17.7188L36.6797 32.7797V17.7188L13.9453 40.5L36.6797 63.2812V48.2203L51.6797 63.2812V17.7188Z" fill="white"/>
</svg> */}

export default RoundButton;