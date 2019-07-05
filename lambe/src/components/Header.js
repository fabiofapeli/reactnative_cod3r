import React, { Component } from "react";
import { connect } from "react-redux";
import { Gravatar } from "react-native-gravatar";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import icon from "../../assets/imgs/icon.png";

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain" //exibir imagem inteira
  },
  title: {
    color: "#000", //cor padrão no android é cinza, assim padronizamos
    fontFamily: "shelter", //Cuidado! o Android verifica o nome do arquivo enquanto IOS o nome da fonte
    height: 30,
    fontSize: 20
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  user: {
    fontSize: 10,
    color: "#888"
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10
  }
});

class Header extends Component {
  render() {
    const name = this.props.name || "Anonymous";
    const gravatar = this.props.email ? (
      <Gravatar
        options={{ email: this.props.email, secure: true }}
        style={styles.avatar}
      />
    ) : null;
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>Lambe Lambe</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{name}</Text>
          {gravatar}
        </View>
      </View>
    );
  }
}

//será acessado como this.props.name ou this.props.email
const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name,
    }
}


/*
será acessada como this.props.user.name ou this.props.user.email
const mapStateToProps = (user) => {
    return {
        user: user
    }
}
*/

export default connect(mapStateToProps)(Header)
//export default Header;
