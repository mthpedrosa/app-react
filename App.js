import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Titulo from './Titulo/index';
import Constants from 'expo-constants';
import Principal from './components/Principal/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Principal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#c0c0c0',
  },
});
