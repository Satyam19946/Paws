/**
 * Written by - Satyam Gupta
 * Date - 5/7/2021
 * 
 * SVG for the likeIcon.
 */
import React from 'react';
import { View } from 'react-native';
import Svg, {Path} from 'react-native-svg';

const LikeIcon = () => {
        return(
            <View>
                <Svg width="75" height="81" viewBox="0 0 75 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M71.6016 23.0344C64.1016 1.5188 39.7266 11.1375 37.5 21.8954C34.4531 10.5047 10.6641 2.02505 3.39844 23.0344C-4.6875 46.4485 34.6875 67.4579 37.5 70.875C40.3125 68.0907 79.6875 46.0688 71.6016 23.0344Z" fill="#66CAF2">
                    </Path>
                </Svg>
            </View>
        );
}

export default LikeIcon;