import React, {
    Component
} from 'react';
import {
    View
} from 'react-native';
import d from './app/assets/d.js';
import {AnimatedSVGPath} from 'react-native-svg-animations';

export default class App extends Component {
    render() {
        return (
            <View style={{ marginTop: 40 }}>
                <AnimatedSVGPath
                    strokeColor={"green"}
                    duration={500}
                    strokeWidth={10}
                    height={400}
                    width={400}
                    scale={0.75}
                    delay={100}
                    d={d}
                />
            </View>
        );
    }
}
