import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';

function Display(props) {
    const [resultado, setResultado] = useState(0)

    return (
        <View style={styles.display}>
            <TextInput
                style={styles.displayText}
                value={String(props.value)}>
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 45,
        heigth: 200,               
    },
    displayText:{
        fontSize: 60,
        color: "#fff"
    }
})

export default Display
