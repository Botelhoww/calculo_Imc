import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {altura:0, peso:0, resultado:0, resultadoTexto:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){

    let imc = this.state.peso/ (this.state.altura * this.state.altura)
    let r = this.state
    r.resultado = imc
    
    if (imc < 18.5) {
      r.resultadoTexto = "Magreza"
    } 
    if (imc >= 18.5 & imc <= 24.9) {
      r.resultadoTexto = "Normal"
    }
    if (imc >= 25.0 & imc <= 29.9) {
      r.resultadoTexto = "Sobrepreso - Grau 1"
    }
    if (imc >= 30.0 & imc <= 39.9) {
      r.resultadoTexto = "Obesidade - Grau 2"
    }
    if (imc > 40) {
      r.resultadoTexto = "Obesidade  - Grau 3"
    }
    
    this.setState(r)
  }

  render() {
    return(
      <SafeAreaView style={styles.divPrincipal}>
        <View style={{flexDirection: 'row'}}>
          <TextInput keyboardAppearance={'dark'} keyboardType={'numbers-and-punctuation'} style={styles.input} placeholder="Altura" onChangeText={(altura) => {this.setState({altura})}}></TextInput>
          <TextInput keyboardAppearance={'dark'} keyboardType={'numbers-and-punctuation'} style={styles.input} placeholder="Peso" onChangeText={(peso) => {this.setState({peso})}}></TextInput>
        </View>

          <TouchableOpacity onPress={this.calcular} style={styles.botao}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>

      <View style={{marginVertical: 30}}>
        <Text style={styles.IMC}>Seu IMC é</Text>
        <Text style={styles.Resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={styles.Estado}>{this.state.resultadoTexto}</Text>
      </View>
      </SafeAreaView>
    );
  }
}

console.disableYellowBox = true

const styles = StyleSheet.create({
botao:{
  backgroundColor: 'tomato',
  borderRadius: 10,
  width: 200,
  height: 35,
  alignSelf: "center",
  marginVertical: 20
},
textoBotao:{
  color: '#fff', 
  fontSize: 20,
  textAlign: 'center',
  paddingVertical: 8
},
divPrincipal: {
  backgroundColor: '#455357',
  height: '100%',
  width: '100%',
},
input:{
  height: 80,
  textAlign: 'center',
  width: "50%",
  fontSize: 50,
  marginTop: 24
},
IMC:{
  color: '#fff',
  fontSize: 45,
  fontWeight: 'bold',
  textAlign: 'center',
},
Resultado:{
  fontSize: 30,
  color: '#fff',
  textAlign: 'center',
  marginVertical: 10
},
Estado:{
  fontSize: 50,
  color: 'lightblue',
  textAlign: 'center',
  marginVertical: 25
}
})

