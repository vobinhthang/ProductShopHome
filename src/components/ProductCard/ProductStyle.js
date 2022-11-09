import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#eeeeee',
        margin: 10,
        flexDirection: 'row'
    },
    image: {
        height: 100,
        minWidth: 100,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    price: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 16
    },
})