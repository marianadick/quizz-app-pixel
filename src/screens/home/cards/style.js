import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cardView: {
        alignSelf: "center",
        width:"93%",
        height: 300,
        justifyContent: "flex-start",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        marginTop: 12,
    },

    image: {
        alignItems: "flex-start",
        width:"auto",
        borderRadius: 8,
    },
    title: {
        textAlign: 'left',
        fontSize: 24,
        color: '#3C3A36',
        marginTop:16,
        marginLeft: 16,
    },
    description: {
        textAlign: 'left',
        color: '#3C3A36',
        fontSize: 14,
        marginLeft: 16,
        marginTop: 4,
    },

});

export default styles