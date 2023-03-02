import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class Envio extends Component {
    _onPressButton() {
        Alert.alert('Enviado');
    }

    render() {
        return (
            <View >
                <View style={styles.buttonContainer}>
                    <Button color={"green"} onPress={this._onPressButton} title="Enviar" />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    
    buttonContainer: {
        margin: 40,
    },
});