import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function InfoModal({ close }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/gas.png')}
      />
      <Text style={styles.title}>Conpensa usar Álcool</Text>
      <View style={styles.results}>
        <Text style={styles.tilteResults}>Com os preços:</Text>
        <Text style={styles.textResults}>Álcool: R$ 4.60</Text>
        <Text style={styles.textResults}>Gasolina: R$ 7.60</Text>
      </View>
      <TouchableOpacity 
        style={styles.btn}
        onPress={close}
      >
        <Text style={styles.btnText}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#212121'
  },
  title: {
    color: '#2AD15E',
    fontSize: 30,
    fontWeight: 'bold'
  },  
  results: {
    width: '100%'
  },
  tilteResults: {
    color: '#fcfcfc',
    fontSize: 25,
    fontWeight: 'bold'
  },  
  textResults: {
    color: '#fcfcfc'
  },
  btn: {
    width: '100%',
    borderWidth: '#ff502f',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#ff502f'
  }
})