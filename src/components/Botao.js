import React from 'react'
import { Text, TouchableHighlight, View, StyleSheet, TouchableOpacity} from 'react-native'

function Botao(props) {
    return (
        <View style={styles.keyboard}>
            <TouchableOpacity
                style={styles.keyboardBtn}
                onPress={() => props.funcao(props.label)}>
                <Text style={styles.btnTxt}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

function BotaoCaracteres(props) {
    return (
        <View style={styles.keyboard}>
            <TouchableOpacity
                style={styles.keyboardBtnCaracter}
                onPress={() => props.funcao(props.label)}>
                <Text style={styles.btnTxtCaracter}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

function BotaoResultado(props) {
    return (
        <View style={styles.keyboard}>
            <TouchableOpacity
                style={styles.keyboardBtnResultado}
                onPress={() => props.funcao(props.label)}>
                <Text style={styles.btnTxt}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    keyboard:{
        padding: 5        
    },
    keyboardBtn: {
        backgroundColor: "pink",
        borderRadius: 10,
        padding: 25,
        alignContent: "space-around",
        width: 88,
        height: 88
    },
    keyboardBtnCaracter:{
        backgroundColor: "pink",
        borderRadius: 10,
        padding: 25,
        alignContent: "space-around",
        width: 88,
        height: 88
    },
    keyboardBtnResultado:{
        backgroundColor: "purple",
        borderRadius: 10,
        padding: 25,
        alignContent: "space-around",
        width: 88,
        height: 88
    },
    btnTxtCaracter:{
        textAlign: "center",
        color: "purple",
        fontSize: 25
    },
    btnTxt: {
      textAlign: "center",
      color: "white",
      fontSize: 25
    }
})

export {Botao, BotaoCaracteres,BotaoResultado}