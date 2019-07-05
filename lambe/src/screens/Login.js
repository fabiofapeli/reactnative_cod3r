import React, { Component } from "react";
import { connect } from 'react-redux'; //conectará o componente login com o Redux
import {login} from '../store/actions/user';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4"
  },
  buttomText: {
    fontSize: 20,
    color: "#FFF"
  },
  input: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#EEE",
    height: 40,
    borderWidth: 1,
    borderColor: "#333"
  }
});

class Login extends Component {
  state = {
    name: "Temporário",
    email: "",
    password: ""
  };

  login = () => {
    this.props.onLogin({ ...this.state })
    this.props.navigation.navigate("Profile");
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoFocus={true}
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity onPress={this.login} style={styles.buttom}>
          <Text style={styles.buttomText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Register')
        }} style={styles.buttom}>
          <Text style={styles.buttomText}>Criar nova conta.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//método que mapeará as actions e fará o dispatch (despacho)
const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user)) //encaminha a action para todos os reducers
  }
}

//export default Login;
//ligação do componente com o redux
export default connect(
                        null, // não mapeando nenhum estado da propriedade
                        mapDispatchToProps
                        )(Login)
