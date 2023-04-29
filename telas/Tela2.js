
import { Button, StyleSheet, Text, View } from "react-native";

const Tela2 = ({navigation}) => {
    return (
        <View style={styles.container}>
              <Text style={styles.texto}>
                Você está na Tela 2
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
                    title="Tela 3"
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
        backgroundColor: "lightblue",
    },
    texto: {
        color: 'black',
        fontSize: 30,
        marginBottom: 15,
        alignSelf:"center",
    },
    separador: {
        alignSelf:"center",
        marginBottom: 20,
    },
});

export default Tela2;