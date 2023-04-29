import React from "react";
import { Button, Text, View, StyleSheet, Image, } from "react-native";

class Products extends React.Component {
    //metodo construtor guarda as informações dos produtos
    constructor(props) {
        super(props);
        this.state = {
            texto: 'Comprar',
            qtd: 0,
            total: 0,
            adicionado: false
        };
    }

    //aqui serve para adicionar os produtos
    addProduto() {
        this.setState({
            qtd: this.state.qtd + 1,
            total: this.state.total + this.props.p.preco
        });
        this.props.valorFinal(this.props.p.preco);
    }

    render() {
        return (
            <View style={styles.container}>
                <View >
                    {/*aqui o "p" serve para chamar a propriedade*/}
                    <Image source={this.props.p.img}
                        style={styles.imgProd} />

                    <View style={styles.nomeprod}>
                        <Text style={styles.prod} >
                            {this.props.p.nome}
                        </Text>
                    </View>
                    <Text
                        style={styles.prod} >R$ {this.props.p.preco}
                    </Text>

                    <Text style={styles.prod}
                    >Qtd:{this.state.qtd}
                    </Text>

                    <Text style={styles.prod}
                    >Total: R$ {this.state.total}
                    </Text>

                    <View style={styles.botao}>
                        <Button
                            color={'black'}
                            onPress={this.addProduto.bind(this)}
                            title={'Adicionar'}
                        />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //container dos itens (imagem, nome, preco, botao, etc...)
    container: {
        backgroundColor: 'white',
        padding: 10,
    },
    //texto que aparece nos produos
    prod: {
        fontSize: 20,
        color: 'black',
    },

    //imagem dos produtos
    imgProd: {
        alignSelf: 'center',
        width: 250,
        height: 250,
    },

    //autoexplicativo
    botao: {
        padding: 15,
    },
});


export default Products;