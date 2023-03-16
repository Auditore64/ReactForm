import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Produto from "./Produto";

const produtos = [
    { img: require('./images/rice.jpg'), nome: 'Arroz ', preco: 15, desc: 'Descrição: Arroz branco comum', },
    { img: require('./images/beans.jpg'), nome: 'Feijão ', preco: 9.85, desc: 'Descrição: Feijão vermelho', },
    { img: require('./images/sugar_1.jpg'), nome: 'Açúcar', preco: 10, desc: 'Descrição: Açúcar branco tipo cristal', },
    { img: require('./images/vannila_ice_cream.webp'), nome: 'Sorvete ', preco: 20, desc: 'Descrição: Sorvete sabor Baunilha', },
];

/*
ELEVAÇÃO DO STATE
1° - DEFINIR PROPRIEDADES E METODOS
2° - PASSAR METODO COMO PROPRIEDADE PARA O COMPONENTE FILHO
3° - NO FILHO, CHAMAR O METODO PAI
*/
class Carrinho extends React.Component {

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

            <View style={styles.outView}>
                <View style={styles.container}>

                    {/*chamando o produto e duas propriedades p e valorFinal*/}
                    <Produto
                        p={produtos[0]}
                        valorFinal={this.atualizarTotal.bind(this)}
                    />

                    <Produto
                        p={produtos[1]} valorFinal={this.atualizarTotal.bind(this)}
                    />

                    <Produto
                        p={produtos[2]} valorFinal={this.atualizarTotal.bind(this)}
                    />

                    <Produto
                        p={produtos[3]}
                        valorFinal={this.atualizarTotal.bind(this)}
                    />

                    <Text style={styles.textProd}>
                        Valor Final : R$
                        <Text style={styles.textProd}>
                            {this.state.valorTotal}
                        </Text>
                    </Text>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    outView: {

        display: 'flex',
justifyContent:'space-evenly',
    },
    //container de fora (que fica em volta dos itens do pedido)
    container: {
        backgroundColor: 'white',
        margin: 6,
        padding: 10,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',
    },
    //caixa que contem o valor final
    textProd: {
        margin: 20,
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        height: "auto",
        width: "auto",
        color: 'black',

    },


});


export default Carrinho;