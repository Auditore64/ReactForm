import React from "react";
import { Text, View } from "react-native";

//usando classe
class Lista extends React.Component {
    render() {
        return (
            <View> {/*usando props para poder passar os itens que eu quiser*/}
                <Text>{this.props.lista[0]}</Text>
                <Text>{this.props.lista[1]}</Text>
                <Text>{this.props.lista[2]}</Text>


            </View>
        );
    }
}


export default Lista;