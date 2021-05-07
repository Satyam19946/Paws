import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ReverseIcon = () => {

    return(
        <View>
        <Svg width="75" height="81" viewBox="0 0 75 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M37.5 78.4688C56.9163 78.4688 72.6562 61.4696 72.6562 40.5C72.6562 19.5304 56.9163 2.53125 37.5 2.53125C18.0837 2.53125 2.34375 19.5304 2.34375 40.5C2.34375 61.4696 18.0837 78.4688 37.5 78.4688Z" fill="#4FD1D9"/>
            <Path d="M51.6797 17.7188L36.6797 32.7797V17.7188L13.9453 40.5L36.6797 63.2812V48.2203L51.6797 63.2812V17.7188Z" fill="white"/>
        </Svg>
        </View>
    );
}

export default ReverseIcon;

