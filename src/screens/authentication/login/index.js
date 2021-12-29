import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from './style';
import signUp from '../signup/index'

export default function login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (<View style={styles.container}>
        <Text style={styles.title}>Entrar</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="#BEBAB3"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#BEBAB3"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity
        onPress={() => navigation.navigate("passwordRecovery")}>
          <Text style={styles.small_button}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.small_button}>Criar conta</Text>
        </TouchableOpacity>

      </View>
    );
  }
