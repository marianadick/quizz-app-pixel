import React from 'react';
import { Text, View, Image} from "react-native";
import styles from './style';

export default function Cards(props){
    return (
        <View style={styles.cardView}>
            <Image source={props.image} style={styles.image}></Image>
            <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    );
}
