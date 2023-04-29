import { Button, StyleSheet, Text, View } from "react-native";

const TelaContato = ({ navigation }) => {
    return (
        <View>
            <Text
                style={styles.texto}
            >
                Tela Contato
            </Text>
            <Button
                color={'green'}
                title="Tela Principal"
                onPress={() =>
                    navigation.navigate('TelaHome', { name: 'Tela Principal' })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        color: 'black',
        fontSize: 30,
        marginBottom:15,
    }
});

export default TelaContato;