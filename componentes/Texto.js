//isso é importação nomeada
import { Text, View } from "react-native";

/*se for uma constante precisa usar uma arrow function 
lembrar de usar o return e depois exportar o componente

export default const ....

é usado para exportar mais de um componente de uma vez
*/


function Texto() {
    return (
        <View>
            <Text
                style={{
                    backgroundColor: "white",
                    fontSize: 45,
                    color: 'black',
                }}
            >Reanimate Through Homicide</Text>
            
            <Text
                style={{
                    backgroundColor: "white",
                    fontSize: 45,
                    color: 'black',
                }}
            >Necrogenic Resurrection</Text>
            
        </View>

    );
}
/*
const Texto = () => {
    return (
        <View>
            <Text>Victor</Text>
            <Text>Henrique</Text>
        </View>
    );

}
*/
export default Texto;

//exportação padrao