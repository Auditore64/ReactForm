import { Button, StyleSheet, Text, View } from "react-native";

const Tela3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
              <Text style={styles.texto}>
                Você está na Tela 3
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
                    title="Tela 1"
                    onPress={() =>
                        navigation.navigate('Tela1', { name: 'Tela 1' })
                    }
                />
            </View>

            <View style={styles.separador}>
                <Button
                    color={'green'}
                    title="Tela 2"
                    onPress={() =>
                        navigation.navigate('Tela2', { name: 'Tela 2' })
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
        backgroundColor: "lightgreen",
    },
    texto: {
        color: 'black',
        fontSize: 30,
        marginBottom: 15,
        alignSelf: "center",
    },
    separador: {
        marginBottom: 20,
        alignSelf: "center"
    },
});


export default Tela3;