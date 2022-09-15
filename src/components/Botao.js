import React from 'react'
import { Text, TouchableHighlight, View, StyleSheet} from 'react-native'

function Botao(props) {
    return (
        <View style={styles.keyboard}>
            <TouchableHighlight
                style={styles.keyboardBtn}
                onPress={() => props.funcao(props.label)}>
                <Text style={styles.btnTxt}>{props.label}</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    keyboard:{
        padding: 5        
    },
    keyboardBtn: {
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 25,
        alignContent: "space-around",
        width: 88,
        height: 88
    },
    btnTxt: {
      textAlign: "center",
      color: "white",
      fontSize: 25
    }
})

export default Botao