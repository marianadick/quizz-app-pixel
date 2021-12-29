import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from '../login/style';

export default function signUp({navigation}){

    return (<View style={styles.container}>

        <Text style={styles.title}>Cadastre-se</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Nome"
            placeholderTextColor="#BEBAB3"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="#BEBAB3"
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#BEBAB3"
            secureTextEntry={true}
          />
        </View>
   
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.loginText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}>
          <Text style={styles.small_button}>Entrar</Text>
        </TouchableOpacity>

      </View>
    );
  }
