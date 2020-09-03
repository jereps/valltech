import {Alert} from 'react-native'

function showErros(err) {
    Alert.alert('Ops! Ocorreu um Problema!',`${err}`)
}

function showSuccess(msg){
    Alert.alert('Sucesso',`${msg}`)
}

export { showErros, showSuccess }