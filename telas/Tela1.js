import { Button, Image, StyleSheet, Text, View, VirtualizedList } from "react-native";

/*lembrar sempre de colocar o navigation aqui dentro da arrow function
com chaves
*/

const Tela1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Você está na Tela 1
            </Text>
            <Text style={styles.texto}>
                Este é Stan Marsh
            </Text>
            <Image 
            style={styles.imagens}
            source={require('../componentes/images/StanMarsh.webp')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "lightcyan"
    },
    separador: {
        marginBottom: 30,
        alignSelf: "center"
    },
    texto: {
        color: 'black',
        fontSize: 30,
        marginBottom: 15,
        alignSelf: "center",
    },
    imagens: {
        marginTop: 20,
        alignSelf: "center",
        width: 329,
        height: 510,
    }
});

export default Tela1;