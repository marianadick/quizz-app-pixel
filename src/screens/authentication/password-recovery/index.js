import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import signUp from '../signup/index';
import styles from '../login/style';

export default function passwordRecovery({navigation}){

    return (<View style={styles.container}>

        <Text style={styles.title}>Recuperar senha</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Digite seu endereço de e-mail"
            placeholderTextColor="#BEBAB3"
          />
        </View>
   
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.loginText}>Enviar e-mail</Text>
        </TouchableOpacity>

      </View>
    );
  }
