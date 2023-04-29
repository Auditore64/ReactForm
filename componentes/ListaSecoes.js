import { SectionList, Text, View } from "react-native";

const ListaSecoes = (props) => {
    return (
        <View>
            <SectionList
                sections={[
                    { title: 'Mazda', data: ['RX-7', 'RX-8', 'Miatta'], footer:'Modelos Mazda' },
                    { title: 'Toyota', data: ['AE70', 'Supra', 'AE86'], footer:'Modelos Toyota' },
                ]}
                //retorna item dentro do data
                renderItem={({ item }) => (
                    <Text
                        style={{
                            backgroundColor: 'lightgreen',
                            fontSize: 45,
                            color: 'black',
                        }}

                    >{item}</Text>
                )}
                //rendersectionheader retorna o que seria o cabecalho da secao (aqui é section)

                renderSectionHeader={({ section }) => (
                    <Text
                        style={{
                            backgroundColor: 'green',
                            fontSize: 45,
                            color: 'white',
                            padding: 5,

                        }}
                    >{section.title}</Text>
                )}

                renderSectionFooter={({ section }) => (
                    <Text
                        style={{
                            backgroundColor: 'blue',
                            fontSize: 45,
                            color: 'red',
                            padding: 5,

                        }}
                    >{section.footer}</Text>

                )}
            />
        </View>
    );
}


export default ListaSecoes;