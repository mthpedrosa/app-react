import * as React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';
import styles from "./style";

export default function ResultadoDesconto(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: "O valor com desconto é " + props.resultado
    })
  }

  return (
    <View style={styles.resultado}>
      <View style={styles.boxBotaoCompartilhar}>
        {props.resultado != null ? 
        <TouchableOpacity onPress={onShare} style={styles.compartilhar}>
          <Text style={styles.textCompartilhar}>Compartilhar</Text>
        </TouchableOpacity>
        :
        <View></View>
        }
      </View>
      <Text style={styles.txtResultado}>{props.resultado}</Text>
      <Text style={styles.textMensagem}>{props.mensagem}</Text>
    </View>
  );
}