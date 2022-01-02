import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import Cards from './cards';
import styles from './style';

const items = [
    {
        id: '1',
        title: 'UI',
        description: 'Questões sobre interface',
        image: require('../../../assets/facil.png'),
    },
    {
        id: '2',
        title: 'Python',
        description: 'Questões sobre Python',
        image: require('../../../assets/facil.png'),
    },
    {
        id: '3',
        title: 'JS',
        description: 'Questões sobre Javascript',
        image: require('../../../assets/facil.png'),
    }
]

export default function homeScreen({navigation}){

    return (
        <View style={styles.HomeView}>
            <Text style={styles.bodyText}>Hello,</Text>
            <Text style={styles.title}>Juana Antonieta</Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Pesquisar quiz"
                placeholderTextColor="#BEBAB3"
                />
            </View>
            <FlatList
            data={items}
            renderItem={({item})=>{
              return <TouchableOpacity onPress={() => navigation.navigate("Login",
              {
                image: item.image,
                title: item.title,
              })}><Cards image={item.image} title={item.title} description={item.description}/>
                    </TouchableOpacity>
            }}
        />
        </View>
    );
  }