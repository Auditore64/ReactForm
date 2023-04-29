import { Button, StyleSheet, Text, View, VirtualizedList } from "react-native";

/*lembrar sempre de colocar o navigation aqui dentro da arrow function
com chaves
*/

const Tela1 = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.texto}>
                Você está na Tela 1
            </Text>
            <View style={styles.separador}>
                <Button
                    color={'green'}
                    title="Home"
                    onPress={() =>
                        navigation.navigate('TelaHome', { name: 'Tela Home' })
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
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "lightpink",
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
    }
});

export default Tela1;