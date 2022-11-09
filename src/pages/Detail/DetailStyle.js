import { Dimensions, StyleSheet } from "react-native";

const deviceSize =  Dimensions.get('window');

export default StyleSheet.create({

    container: {
        flew: 1
    },
    body_container: {
        padding: 10,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 20

    },
    desc: {
        fontStyle: 'italic',
        marginVertical: 10,
        marginHorizontal: 10
        
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right'
    }
})