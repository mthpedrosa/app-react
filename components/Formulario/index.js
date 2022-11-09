import { View, Text, TextInput, TouchableOpacity, Vibration} from 'react-native';
import ResultadoDesconto from './ResultadoDesconto/index';
import { useState} from 'react';
import styles from './style';

export default function Formulario() {

  const [valor, setValor] = useState(null)
  const [percDesc, setPerDesc] = useState(null)
  const [mensagemDesc, setMensagemDesc] = useState("Preencha o valor do produto e o desconto")
  const [desconto, setDesconto] = useState(null)
  const [textBotao, setTextoBotao] = useState("Calcular Desconto")
  const [mensagemErro, setMensagemErro] = useState(null)

  function calculaDesconto(){
    return setDesconto((valor - valor * percDesc / 100).toFixed(2))
  }

  function validaDesconto() {
    if(valor != null && percDesc != null) {
      calculaDesconto()
      setMensagemDesc("Valor do produto com desconto:")
      setTextoBotao("Calcular novamente")
      setValor(null)
      setPerDesc(null)
      setMensagemErro(null)
      return
    }
    setPerDesc(null)
    setTextoBotao("Calcula Desconto")
    setMensagemDesc("preencha o valor do produto e o desconto")
    setMensagemErro("Campo obrigatório")
    Vibration.vibrate([100, 500, 300, 500])
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Valor do Produto</Text>
        <TextInput
        onChangeText={setValor}
        value={valor}
        placeholder="Ex. 417.50"
        keyboardType="numeric"></TextInput>
        <Text style={styles.textMensagemErro}>{mensagemErro}</Text>
        <Text style={styles.formLabel}>Percentual de Desconto</Text>
        <TextInput
        onChangeText={setPerDesc}
        value={percDesc}
        placeholder="Ex. 20"
        keyboardType="numeric"></TextInput>
        <Text style={styles.textMensagemErro}>{mensagemErro}</Text>
        <TouchableOpacity
          style={styles.buttonCalculator} 
          onPress={() => {
            validaDesconto()
          }}
        >
        <Text style={styles.textButtonCalculator}>{textBotao}</Text>
      </TouchableOpacity>
      </View>
      <ResultadoDesconto mensagem={mensagemDesc} resultado={desconto} />
    </View>
  );
}