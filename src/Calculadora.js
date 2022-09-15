import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import {Botao, BotaoCaracteres, BotaoResultado} from './components/Botao';
import Display from './components/Display';

function Calculadora() {
    const [valores, setValores] = useState([0, 0])
    const [posicao, setPosicao] = useState(0)
    const [operacao, setOperacao] = useState("")
    const [display, setDisplay] = useState(0)

    const addValor = (valor) => {
        let vl = valores
        vl[posicao] = valor
        setValores(vl)
        setDisplay(vl[posicao])
    }

    const addOperador = (operador) => {
        setOperacao(operador)
        setPosicao(1)
        setDisplay(operador)
    }

    const limparDisplay = (operador) => {
        if (operador == "AC") {
            setValores([0, 0])
            setOperacao("")
            setDisplay(0)
        }
    }

    const calcular = () => {
        setPosicao(0)
        let resultado = 0
        if (operacao == "+") {
            resultado = (parseInt(valores[0]) + parseInt(valores[1]))
        }
        if (operacao == "-") {
            resultado = (parseInt(valores[0]) - parseInt(valores[1]))
        }
        if (operacao == "*") {
            resultado = (parseInt(valores[0]) * parseInt(valores[1]))
        }
        if (operacao == "/") {
            resultado = (parseInt(valores[0]) / parseInt(valores[1]))
        }
        setDisplay(resultado)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Calculadora</Text>
            <Display value={display} />
            <View style={styles.keyboard}>
                <BotaoCaracteres label="AC" funcao={limparDisplay} />
                <BotaoCaracteres label="()" funcao={addOperador} />
                <BotaoCaracteres label="%" funcao={addOperador} />
                <BotaoCaracteres label="/" funcao={addOperador} />
            </View>
            <View style={styles.keyboard}>
                <Botao label={7} funcao={addValor} />
                <Botao label={8} funcao={addValor} />
                <Botao label={9} funcao={addValor} />
                <BotaoCaracteres label="*" funcao={addOperador} />
            </View>
            <View style={styles.keyboard}>
                <Botao label={4} funcao={addValor} />
                <Botao label={5} funcao={addValor} />
                <Botao label={6} funcao={addValor} />
                <BotaoCaracteres label="-" funcao={addOperador} />
            </View>
            <View style={styles.keyboard}>
                <Botao label={1} funcao={addValor} />
                <Botao label={2} funcao={addValor} />
                <Botao label={3} funcao={addValor} />
                <BotaoCaracteres label="+" funcao={addOperador} />
            </View>
            <View style={styles.keyboard}>
                <BotaoCaracteres label="+/-" funcao={addOperador} />
                <Botao label={0} funcao={addValor} />
                <BotaoCaracteres label="," funcao={addOperador} />
                <BotaoResultado label="=" funcao={calcular} />
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        fontSize: 30,
        color: "pink",
        backgroundColor: "black",
        padding: 18
    },
    keyboard: {
        flexDirection: "row",
        backgroundColor: "black"
    },
    key: {
        backgroundColor: "red"
    }
})

export default Calculadora
