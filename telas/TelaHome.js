import { Button, StyleSheet, Text, View } from "react-native";
/*

aqui fica o codigo normal da pagina que será exibido
*/
const TelaHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                HOME
            </Text>

            <Text style={styles.texto}>
                Você está na tela principal
            </Text>

            <View style={styles.separador}>
                <Button
                    color={'green'}
                    title="Tela1"
                    onPress={() =>
                        navigation.navigate('Tela1', { name: 'Tela 1' })
                    }
                />
            </View>

            <View style={styles.separador}>
                <Button
                    color={'green'}
                    title="Tela2"
                    onPress={() =>
                        navigation.navigate('Tela2', { name: 'Tela 2' })
                    }
                />
            </View>
            <View style={styles.separador}>
                <Button
                    color={'green'}
                    title="Tela3"
                    onPress={() =>
                        navigation.navigate('Tela3', { name: 'Tela 3' })
                    }
                />
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "black",
    },
    texto: {
        color: 'white',
        fontSize: 30,
        marginBottom: 15,
        alignSelf: "center",
    },
    separador: {
        marginBottom: 20,
        alignSelf: "center"
    },
});

export default TelaHome;