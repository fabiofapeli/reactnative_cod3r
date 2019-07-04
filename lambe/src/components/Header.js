import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../assets/imgs/icon.png'

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain' //exibir imagem inteira
    },
    title: {
        color: '#000',//cor padrão no android é cinza, assim padronizamos
        fontFamily: 'shelter', //Cuidado! o Android verifica o nome do arquivo enquanto IOS o nome da fonte
        height: 30,
        fontSize: 20
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        fontSize: 10,
        color: '#888',
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10,
    }
})


class Header extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe Lambe</Text>
                </View>

            </View>
        )
    }
}

export default Header;