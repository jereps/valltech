import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props,{navigation}) => {
    return (
        <View style={[styles.container, props.style]}>

            <TouchableOpacity {...props} activeOpacity={0.5} style={styles.button} >
            <Icon name={props.icon} size={50} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    height: 65,
    width: '100%',
    alignSelf: 'flex-end',
    backgroundColor: '#b4b3b7',
    borderTopWidth: 3,
    borderColor: '#969499',
    },
    icon: {
        color: '#9c9aa0',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    button: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 45,
        borderColor: '#b4b3b7',
        borderWidth: 4,
        transform: [{translateX: 0},{translateY: -35}],
    },
})