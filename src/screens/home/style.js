import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    bodyText: {
        color: "#3C3A36",
        fontSize: 16,
        lineHeight: 26,
        textAlign: "left",
        fontWeight: "normal",
        marginLeft: 15,
        marginTop:15,
    },
    HomeView: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },

    title: {
        color: "#3C3A36",
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: 42,
        textAlign: "left",
        marginLeft: 15,
    },
    inputView: {
        borderRadius: 12,
        width: "93%",
        height: 56,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        margin: 15,
        alignSelf: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        color: "black"
      },
});

export default styles