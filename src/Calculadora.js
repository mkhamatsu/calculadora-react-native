import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import Botao from './components/Botao';
import Display from './components/Display';

function Calculadora() {
    const [valores, setValores] = useState([0, 0])
    const [operacao, setOperacao] = useState("")
    const [resultado, setResultado] = useState(0)

    function addValor(digito) {
        if (valores[0] == 0) setValores([0, digito])
        if (valores[0] != 0) setValores([1, digito])
    }

    function addOperador(operador) {
        if (operacao == "") setOperacao(operador)
    }

    function limparDisplay(operador) {
        if (operador == "AC") {
            setValores([0,0])
            setOperacao("")
            setResultado(0)
        }
    }

    const calcular = () => {
        if (operacao == "+") {
            setResultado(parseInt(valores[0]) + parseInt(valores[1]))
        }
        if (operacao == "-") {
            setResultado(parseInt(valores[0]) - parseInt(valores[1]))
        }
        if (operacao == "*") {
            setResultado(parseInt(valores[0]) * parseInt(valores[1]))
        }
        if (operacao == "/") {
            setResultado(parseInt(valores[0]) / parseInt(valores[1]))
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Calculadora</Text>
            <Display name={valores[0]}/>
            <Display name={valores[1]}/>
            <Display name={resultado}/>
            <View style={styles.keyboard}>
                <Botao label="AC" funcao={limparDisplay}/>
                <Botao label="()" funcao={addOperador} />
                <Botao label="%" funcao={addOperador} />
                <Botao label="/" funcao={addOperador} />
            </View>
            <View style={styles.keyboard}>
                <Botao label="7" funcao={addValor} />
                <Botao label="8" funcao={addValor} />
                <Botao label="9" funcao={addValor} />
                <Botao label="*" funcao={addOperador} />
            </View>
            <View style={styles.keyboard}>
                <Botao label="4" funcao={addValor} />
                <Botao label="5" funcao={addValor} /> 
                <Botao label="6" funcao={addValor} />
                <Botao label="-" funcao={addOperador} />
            </View>
            <View style={styles.keyboard}>
                <Botao label="1" funcao={addValor} />
                <Botao label="2" funcao={addValor} />
                <Botao label="3" funcao={addValor} />
                <Botao label="+" funcao={addOperador} />
            </View>
            <View style={styles.keyboard}>
                <Botao label="+/-" funcao={addOperador} />
                <Botao label="0" funcao={addValor} />
                <Botao label="," funcao={addOperador} />
                <Botao label="=" funcao={calcular()} />
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
    },
    keyboard: {
        flexDirection: "row",
        backgroundColor: "black"
    }
})

export default Calculadora
