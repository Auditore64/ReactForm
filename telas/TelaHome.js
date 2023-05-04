import { Button, Image, StyleSheet, Text, View } from "react-native";
/*

aqui fica o codigo normal da pagina que será exibido
*/
const TelaHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Você está na tela principal
            </Text>
            <Text style={styles.texto}>
                Este é Kenny McCormick
            </Text>
           <Image style={styles.imagens}
           source={require('../componentes/images/KennyMcCormick.webp')}
           />
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
    imagens: {
        marginTop: 20,
        alignSelf: "center",
        width: 333,
        height: 451,
    }
});

export default TelaHome;