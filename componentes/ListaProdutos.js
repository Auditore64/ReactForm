import { FlatList, Image, StyleSheet, Text, View } from "react-native";


const ListaProdutos = () => {
    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={props.p.img}
                renderItem={
                    ({ item }) => (
                        <Image style={styles.imagem}
                            source={item} />
                    )
                }
            />
        </View>
    );

}


const styles = StyleSheet.create({

    imagem: {
        width: 250,
        height: 250,
    },
});

export default ListaProdutos;

