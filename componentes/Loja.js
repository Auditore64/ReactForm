import { View, Text, StyleSheet } from "react-native";
import React from "react";


const LojaProd = () => {
    return (
        <View style={styles.Container} >
            <Text style={styles.Texto}>Discos Arch Enemy</Text>
        </View>
    );

};


const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
    },

    Texto: {
        fontWeight: 600,
        color: 'black',
        fontSize: 35,
    },




});


export default LojaProd;