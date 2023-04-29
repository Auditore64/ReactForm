import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const Product = (props) => {
    return (
        <View style={styles.produto}>
            {/*
            ISSO AQUI FOI A PROVA DE SEXTA DIA 24
            aqui ta usando o p pra facilitar, pode colocar a letra que quiser
            para saber as propriedades que precsa para passao o objeto, ver o que vem antes do nome da variavel
            no caso PROPS.P            
            */}

            <FlatList
                horizontal={true}
                data={props.p.imagens}
                renderItem={({ item }) => (
                    <Image
                        style={styles.imagem}
                        source={item.img}
                    />
                )}
            />
            <Text>{props.p.nome}</Text>
            <Text>R$ {props.p.preco}</Text>
        </View>
    );

}

const styles = StyleSheet.create({

    //texto dos produtos
    produto: {
        color: 'lightgray',
        fontSize: 30,
    },
    imagem: {
        width: 300,
        height: 300,
    },
});


export default Product;