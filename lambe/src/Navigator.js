import React from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import AddPhoto from "./screens/AddPhoto";
import Feed from "./screens/Feed";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";

const authRouter = createStackNavigator(
  {
    Login: { screen: Login, navigationOptions: { title: "Login" } },
    Register: { screen: Register, navigationOptions: { title: "Regiter" } }
  },
  {
    initialRouteName: "Login"
  }
);

const loginOrProfile = createSwitchNavigator(
  {
    Profile: Profile,
    Auth: authRouter
  },
  {
    initialRouteName: "Profile"
  }
);

const MenuRoutes = createBottomTabNavigator({
  Feed: {
    name: "Feed",
    screen: Feed,
    navigationOptions: {
      title: "Feed",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
      )
    }
  },
  Add: {
    name: "Add photo",
    screen: AddPhoto,
    navigationOptions: {
      title: "Adicionar foto",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="camera" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    name: "Profile",
    screen: loginOrProfile,
    navigationOptions: {
      title: "Perfil",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={30} color={tintColor} />
      )
    }
  }
});

const MenuConfig = {
  initialRouteName: "Feed",
  tabBarOptions: {
    showLabel: false
  }
};

const MenuNavigator = createAppContainer(MenuRoutes, MenuConfig);
export default MenuNavigator;
