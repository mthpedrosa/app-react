import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import styles from "./style";

export default function Titulo(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Cálculo de Desconto</Text>
        </View>
    )
}