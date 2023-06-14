import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native'
import InfoModal from './src/components/InfoModal';

export default function App() {
  const [alcool, setAlcool] = useState(0);
  const [gas, setGas] = useState(0);
  const [choice, setChoice] = useState('');

  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef();

  function handleCalc(){
    if (alcool === '' || gas === ''){
      alert('Preencha os campos!');
      return;
    }
    const calc = parseFloat(alcool) / parseFloat(gas);
    if (calc <= 0.7 ){
      setShowModal(!showModal)
      setChoice('Álcool')
    } else {
      setShowModal(!showModal)
      setChoice('Gasolina')
    }
  }

  function handleClose(){
    setShowModal(!showModal);
    setAlcool('');
    setGas('');
    inputRef.current.focus();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./src/images/logo.png')}
          style={{marginBottom: 30}}  
        />
        <Text 
          style={{color: '#fcfcfc', fontSize: 25, fontWeight: 'bold'}}
        >
            Qual melhor opção?
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAlcool(text)}
          value={alcool}
          keyboardType='numeric'
          ref={inputRef}
        />
        <Text style={styles.label}>Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setGas(text)}
          value={gas}
          keyboardType='numeric'
        />
        <TouchableOpacity
          style={styles.calcButton}
          onPress={handleCalc}
        >
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
        <Modal
          animationType='slide'
          transparent={false}
          visible={showModal}
        >
          <InfoModal
            close={handleClose}
            choice={choice}
            gas={gas}
            alcool={alcool}
          />
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212121'
  },
  header: {
    flex:1,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    padding: 20,
    marginBottom: 50,
  },
  label: {
    color: '#fcfcfc',
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
  calcButton: {
    width: '100%',
    backgroundColor: '#ff502f',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    
  }, 
  textButton: {
    color: '#fcfcfc',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
  
})