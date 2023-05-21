import React from "react";
import { View, Text, TextInput, Button} from "react-native";

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="ex. 1.75"
                KeyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                placeholder="ex. 75.365"
                KeyboardType="numeric"
                />
                <Button title="Calcular IMC"/>
            </View>
           {/* <ResultImc messageResultimc={messageImc} resultImc={imc}/> */}
        </View>

    );
}