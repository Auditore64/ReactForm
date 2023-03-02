import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Alert, } from "react-native";
import Envio from "./Envio";

const Formulario = () => {

    return (
        <ScrollView style={styles.conteudo}>
            <Text style={styles.texto}>
                Preencha os campos do formulário
            </Text>

            <View style={styles.container}>
                <Text style={styles.campoTexto}>
                    Nome
                </Text>
                <TextInput
                    style={styles.campo}
                    defaultValue="Insira o seu nome"
                />
                <Text style={styles.campoTexto}>
                    E-mail
                </Text>

                <TextInput style={styles.campo}
                    defaultValue="Insira o seu E-mail"
                />
                <Text style={styles.campoTexto}>
                    Endereço
                </Text>

                <TextInput style={styles.campo}
                    defaultValue="Insira o seu Endereço"
                />
                <Text style={styles.campoTexto}>
                    Idade
                </Text>

                <TextInput style={styles.campo}
                    defaultValue="Insira a sua idade"
                />
                <Text style={styles.campoTexto}>
                    Senha
                </Text>

                <TextInput style={styles.campo}
                    defaultValue="Insira a sua senha"
                />

                <Envio />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    campoTexto: {
        color: 'black',
        fontSize: 20,
        height: 30,
    },

    campo: {
        color: 'gray',
        width: 330,
        height: 40,
        borderColor: '#189643',
        borderWidth: 1,
        borderRadius: 20,
        padding:10,
    },
    texto: {
        color: 'black',
        fontSize: 20,
        height: 30,
        textAlign: 'center',
        margin:20,
    },
    conteudo: {
        borderRadius: 10,
        backgroundColor: '#8EDBB0',
        borderWidth: 1,
    }
});

export default Formulario;