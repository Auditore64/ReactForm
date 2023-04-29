import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Products from "./Products";

//declarando os nomes e precos dos produtos
const produtos = [
    { img: require('./images/black_earth_cover.jpg'), nome: ' Black Earth Remastered (2013) ', preco: 15, desc: 'Descrição: Arroz branco comum', },
    { img: require('./images/stigmata_cover.jpg'), nome: 'Stigmata (1998) ', preco: 10, desc: 'Descrição: Feijão vermelho', },
    { img: require('./images/burning_bridges.png'), nome: 'Burning Bridges (1999)', preco: 10, desc: 'Descrição: Açúcar branco tipo cristal', },
    { img: require('./images/root_of_all_evil.jpg'), nome: 'The Root Of All Evil (2009) ', preco: 20, desc: 'Descrição: Sorvete sabor Baunilha', },
];


class Compras extends React.Component {

    state = {
        valorTotal: 0
    };
    //isso é um metodo
    atualizarTotal(valor) {
        this.setState({
            valorTotal: this.state.valorTotal + valor
        });
    };


    render() {
        return (
            <ScrollView
                horizontal={true}
            >
                <View >
                    <View style={styles.container}>

                        {/*chamando o produto e duas propriedades p e valorFinal*/}
                        <Products
                            p={produtos[0]}
                            valorFinal={this.atualizarTotal.bind(this)}
                        />

                        <Products
                            p={produtos[1]} valorFinal={this.atualizarTotal.bind(this)}
                        />

                        <Products style={styles.produto}
                            p={produtos[2]} valorFinal={this.atualizarTotal.bind(this)}
                        />

                        <Products
                            p={produtos[3]}
                            valorFinal={this.atualizarTotal.bind(this)}
                        />

                    </View>
                    <View>
                        <Text style={styles.textProd}>
                            Valor Final : R$
                            <Text style={styles.textProd}>
                                {this.state.valorTotal}
                            </Text>
                        </Text>

                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    //container de fora (que fica em volta dos itens do pedido)
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    //caixa que contem o valor final
    textProd: {
        margin: 20,
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        height: 'auto',
        width: 190,
        color: 'green',
    },
});


export default Compras;