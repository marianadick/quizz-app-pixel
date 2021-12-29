import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
     
      title: {
        margin: 10,
        color: "#3C3A36",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 32,
      },
     
      inputView: {
        borderRadius: 12,
        width: 343,
        height: 53,
        margin: 10,
        borderColor: '#BEBAB3',
        borderWidth: 1,
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        color: "black"
      },
     
      small_button: {
        height: 30,
        margin: 10,
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
        color: "#78746D"

      },
     
      loginBtn: {
        borderRadius: 12,
        width: 343,
        height: 53,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "#82327E",
      },

      signUpBtn: {
        borderRadius: 12,
        width: 343,
        height: 53,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#82327E",
      },

      loginText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 18,
      }
});

export default styles