import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import Padrao from "../estilo/Padrao";

export default class Evento extends Component {
  state = {
    texto: "" //Componente controlado, sicronizado com componente visual
    //texto: null //Componente não controlado, não sincronizado com componente visual
  };

  alterarTexto = texto => {
    this.setState({ texto }); //substitui this.setState({ texto: texto })
  };

  render() {
    return (
      <View>
        <Text style={Padrao.fonte40}>{this.state.texto}</Text>
        <TextInput
          value={this.state.texto}
          style={Padrao.input}
          onChangeText={this.alterarTexto}
        />
      </View>
    );
  }
}
