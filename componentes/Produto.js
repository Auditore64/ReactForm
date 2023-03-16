import React from "react";
import { Button, Text, View, StyleSheet, Image, } from "react-native";


class Produto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: 'Comprar',
            qtd: 0,
            total: 0,
            adicionado: false //ele é uma propriedade
        };
    }

    /*
    this diz que vamos acessar um dado interno da propriedade
    state guarda o estado interno do componente / é um objeto
    essa funcao possui o this
    addProduto é um método
    */

    // remover item que nao funcionou

    /*
    removeProduto() {
        this.setState({
            qtd: this.setState.qtd - 1,
            total: this.setState.total - this.props.p.preco
        })
        this.props.valorFinal(this.props.p.preco);
    }
    */


    addProduto() {
        this.setState({
            qtd: this.state.qtd + 1,
            total: this.state.total + this.props.p.preco
        });
        this.props.valorFinal(this.props.p.preco);
    }

    render() {
        return (
            <View  >
                <View style={styles.container}>
                    {/*aqui o p serve para chamar a propriedade*/}
                    <Image source={this.props.p.img}
                        style={styles.imgProd} />

                    <Text style={styles.prod} >
                        {this.props.p.nome}
                    </Text>

                    <Text style={styles.prod} >
                        {this.props.p.desc}
                    </Text>
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
                            //estilo do botao
                            color={"green"}
                            /*
                            se for chamar uma funcao que tenha o this 
                             é preciso usar o bind 
                             */
                            onPress={this.addProduto.bind(this)}
                            /*
                            verifica o estado do title, se for false aparece adicionar
                            se for true aparece adicionado
                            */

                            title={'Adicionar'}
                        //title={this.state.adicionado ? 'Adicionado' : 'Adicionar'}
                        />

                        {/*
                        <Button
                            style={styles.botao}
                            onPress={this.removeProduto.bind(this)}
                            title={'Remover'}

                        />
                        */}

                    </View>
                </View>


            </View>
        );
    }
}

/* 
() => {corpo da função, seu codigo} 'arrow function'
as chaves significa que  é um objeto {}
this é um objeto, serve para dizer que aquele atributo pertence a propria classe
setstate é um metodo que serve para atualizar um state, é herdado da classe mãe React.Component
*/

const styles = StyleSheet.create({
    //container dos itens (imagem, nome, preco, botao, etc...)
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        width: 'auto',
        height: 'auto',
    },
    //texto que aparece nos produos
    prod: {
        fontSize: 20,
        color: 'black',
    },

    //imagem dos produtos
    imgProd: {
        alignSelf: 'center',
        width: 200,
        height: 250,
    },

    //autoexplicativo
    botao: {
        padding: 15,
    }
});

export default Produto;