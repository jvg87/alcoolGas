import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function InfoModal({ close }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/gas.png')}
      />
      <Text style={styles.title}>Compensa usar Álcool</Text>
      <View style={styles.results}>
        <Text style={styles.tilteResults}>Com os preços:</Text>
        <Text style={styles.textResults}>Álcool: R$ 4.60</Text>
        <Text style={styles.textResults}>Gasolina: R$ 7.60</Text>
        <TouchableOpacity 
          style={styles.btn}
          onPress={close}
        >
          <Text style={styles.btnText}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#212121',
    paddingHorizontal: 30
  },
  title: {
    color: '#2AD15E',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20
  },  
  results: {
    flex:.25,
    alignItems: 'center',
    width: '100%'
  },
  tilteResults: {
    color: '#fcfcfc',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20
  },  
  textResults: {
    color: '#fcfcfc',
    marginBottom: 20,
    fontSize: 18,
  },
  btn: {
    width: '100%',
    borderWidth:1,
    borderColor: '#ff502f',
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  btnText: {
    textAlign: 'center',
    color: '#ff502f',
    fontSize: 18,
    fontWeight: 'bold'
  }
})