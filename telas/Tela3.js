import { Button, Image, StyleSheet, Text, View } from "react-native";

const Tela3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
              <Text style={styles.texto}>
                Você está na Tela 3
            </Text>
            <Text style={styles.texto}>
                Este é Kyle Broflovski
            </Text>
<Image 
style={styles.imagens}
source={require('../componentes/images/KyleBroflovski.webp')}

/>
          

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "lightgray",
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
    imagens: {
        marginTop: 20,
        alignSelf: "center",
        width: 329,
        height: 400,
    }
});


export default Tela3;