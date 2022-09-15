import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';

function Display(props) {
    const [resultado, setResultado] = useState(0)

    return (
        <View style={styles.display}>
            <TextInput
                style={styles.displayTxt}
                value={String(props.name)}>
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        backgroundColor: "black",
        // padding: 75,
        // heigth: 500,               
    },
    displayTxt:{
        fontSize: 40,
        color: "#fff"
    }
})

export default Display
