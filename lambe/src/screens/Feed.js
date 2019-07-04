import React, { Component } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: "Rafael Pereira Filho",
        email: "rafaelprflh@hotmail.com",
        image: require("../../assets/imgs/fence.jpg"),
        comments: [
          {
            nickname: "John Ray Sheldon",
            comment: "Stunning!"
          },
          {
            nickname: "Ana Julia",
            comment: "Foto linda! Onde foi tirada?"
          }
        ]
      },
      {
        id: Math.random(),
        nickname: "Franciso Leandro Lima",
        email: "franchico@hotmail.com",
        image: require("../../assets/imgs/bw.jpg"),
        comments: []
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

export default Feed;
