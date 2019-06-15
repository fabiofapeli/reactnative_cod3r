import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Simples from "./componentes/Simples";
import Contador from "./componentes/Contador";
import ParImpar from "./componentes/ParImpar";
import Inverter, { MegaSena } from "./componentes/Multi";
import Plataformas from "./componentes/Plataformas";
import ValidarProps from "./componentes/ValidarProps";
import Evento from "./componentes/Evento";
import Avo from "./componentes/ComunicacaoDireta";
import TextoSincronizado from "./componentes/ComunicacaoIndireta";
import ListaFlex from "./componentes/ListaFlex";
import Flex from "./componentes/Flex";

const navigator = createStackNavigator(
  {
    Flex: {
      screen: Flex
    },
    ListaFlex: {
      screen: ListaFlex,
      navigationOptions: { title: "Lista (Flex Box)" }
    },
    TextoSincronizado: {
      screen: TextoSincronizado,
      navigationOptions: { title: "Texto Sincronizado" }
    },
    Avo: {
      screen: () => <Avo nome="João" sobrenome="Silva" />
    },
    Evento: {
      screen: Evento
    },
    ValidarProps: {
      screen: () => <ValidarProps ano={18} />
    },
    Plataformas: {
      screen: Plataformas
    },
    Contador: {
      screen: () => <Contador />
    },
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: { title: "Mega Sena" }
    },
    Inverter: {
      screen: () => <Inverter texto="React Nativo!" />
    },
    ParImpar: {
      screen: () => <ParImpar numero={30} />,
      navigationOptions: { title: "Par & Ímpar" }
    },
    Simples: {
      screen: () => <Simples texto="Flexível!!!" />
    }
  },
  {
    initialRouteName: "Flex",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#DA552f"
      },
      headerTintColor: "#fff"
    }
  }
);

export default createAppContainer(navigator);
/*
export default createDrawerNavigator(
  {
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: { title: "Mega Sena" }
    },
    Inverter: {
      screen: () => <Inverter texto="React Nativo!" />
    },
    ParImpar: {
      screen: () => <ParImpar numero={30} />,
      navigationOptions: { title: "Par & Ímpar" }
    },
    Simples: {
      screen: () => <Simples texto="Flexível!!!" />
    }
  },
  { drawerWidth: 300 }
);
*/
