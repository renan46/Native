import React,{useState} from "react";
import { View, Text, TextInput, Button} from "react-native";
import ResultImc from "./ResultImc/";
export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc,setMessageImc]= useState("Preencha o peso e altura") // Criou constantes e setou o texto dentro delas.
const [imc, setImc]= useState(null)
const [textButtons, setTextButton]= useState(null)


function imcCalculator(){
    return setImc((weight*(height*height)).toFixed(2)); //calculo de iMC e fixando o toFixed faz isso em duas casas decimais.
}

function validationImc(){
    if(weight != null && height != null){
        
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu Imc é igual:")
        
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
}



    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="ex. 1.75"
                KeyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="ex. 75.365"
                KeyboardType="numeric"
                />
                <Button onPress={() => validationImc()}
                 title={textButtons}/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/> 
           
        </View>

    );
}