import { useState } from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
const Form = () => {

    const [nome, setNome] = useState('');
    const [enviar, setEnviar] = useState('false');
    const [titulacao, setTitulacao] = useState('')
    const [casado, setCasado] = useState('false');
    const titulacoes = ['Graduado', 'Especialista', 'Mestre', 'Doutor',]

    return (
        <View style={{ padding: 10, }}>
            <Text
                style={{
                    color: "white",
                    fontSize: 25,
                    padding: 10,
                }}
            >Cadastro</Text>

            <Text
                style={{
                    padding: 10,
                    color: "white",
                    fontSize: 25,
                }}
            >Nome:</Text>

            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    padding: 10,
                    fontSize: 20,
                    borderColor: "white",
                    borderRadius: 5,
                    marginBottom: 10,
                }}
                placeholder="Digite o seu nome"
                defaultValue={nome}
                onChangeText={(valor) => setNome(valor)}
            />

            <Text
                style={{
                    padding: 10,
                    color: "white",
                    fontSize: 25,
                }}
            >Casado:</Text>

            <Switch
                style={{ marginBottom: 10, }}
                onValueChange={() => setCasado(v => !v)}
                value={casado}
            />
            <Text>Titulação</Text>

            <SelectDropdown
                data={titulacoes}
                onSelect={(item, i) => setTitulacao(i) }
            />

            <Button
                title="Enviar"
                onPress={() => setEnviar(true)}
            />

            {enviar &&
                <View>
                    <Text
                        style={{
                            padding: 10,
                            color: "lightblue",
                            fontSize: 25,
                        }}
                    >Nome: {nome}</Text>

                    <Text
                        style={{
                            padding: 10,
                            color: "lightblue",
                            fontSize: 25,
                        }}
                    >Casado: {casado ? 'sim' : 'não'}</Text>

                    <Text
                        style={{
                            padding: 10,
                            color: "lightblue",
                            fontSize: 25,
                        }}
                    >Titulação: {titulacao}</Text>
                </View>
            }
        </View>


    )
}

export default Form;