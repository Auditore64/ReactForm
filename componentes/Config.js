import { useState } from "react";
import { Switch, Text, View, StyleSheet, Button } from "react-native";

const Config = () => {
    //como salvar estado de um objeto sem ser em classe
    const [telaCheia, setTelaCheia] = useState(true);
    const [modoEscuro, setModoEscuro] = useState(true);
    const [exibir, setExibir] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.topo} >
                CONFIG PAGE
            </Text>

            <View style={styles.conteudo}>
                <Text
                    style={styles.texto}
                >Tela Cheia:</Text>
                <Switch
                    style={styles.switch}
                    //mudar a cor do switch
                    trackColor={{ true: 'springgreen', false: 'orangered' }}
                    //mudar cor do botao
                    thumbColor={telaCheia ? 'seagreen' : 'orangered'}
                    //aqui usar o estado definido na constante em cima
                    value={telaCheia}
                    //aqui salva a alteracao de valor do switch
                    onValueChange={() => setTelaCheia(previousState => !previousState)}
                />
                <Text
                    style={styles.texto}
                >Modo Escuro:</Text>
                <Switch
                    style={styles.switch}
                    //mudar a cor do switch
                    trackColor={{ true: 'springgreen', false: 'orangered' }}
                    //mudar cor do botao
                    thumbColor={modoEscuro ? 'seagreen' : 'orangered'}
                    //aqui usar o estado definido na constante em cima
                    value={modoEscuro}
                    //aqui salva a alteracao de valor do switch
                    onValueChange={() => setModoEscuro(previousState => !previousState)}
                />
            </View>
            <Button
                title={exibir ? 'Ocultar' :'Exibir'}
                onPress={() => setExibir(previousState => !previousState)}

            />
            {
                exibir &&
                <View>
                    <Text>Tela Cheia: {telaCheia ? 'sim' : 'não'}</Text>
                    <Text>Modo Escuro: {modoEscuro ? 'sim' : 'não'} </Text>
                </View>
            }
        </View>

    );
}

const styles = StyleSheet.create({
    //container geral 
    container: {
        backgroundColor: '#FF7F50',
    },
    //texto geral
    texto: {
        width: '70%',
        color: 'black',
        fontSize: 25,
    },
    //texto da configuracao
    topo: {
        color: 'black',
        fontSize: 30,
        padding: 15,
        backgroundColor: '#9FE2BF',
        textAlign: 'center',
    },
    conteudo: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 10,
    },
    switch: {
        width: '30%',
    },
});


export default Config;