import React, { useState, useContext, useEffect } from 'react'
import { View,Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { UserContext } from '../contexts/UserContext'


import FormRow from '../components/FormRow'
import AuthInput from '../components/AuthInput'
import { showErros, showSuccess } from '../common'
import api from '../services/api'

export default function LoginScreen({navigation}) {
    const { state:OperadorState , dispatch: operadorDespatch} = useContext(UserContext);
    const [loginId, setLoginId] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState(null)

    useEffect( () => {
           return () => clearTimeout(time);
    },[]);



    tryLogin = async () => {
        setIsLoading(true);

        try {
            if (loginId != '' && senha != ''){
                const resp = await api.loginOperador(loginId,senha);
                
                if (resp.status == 200 && resp.data.Status != "FALHA"){
                        
                    operadorDespatch({
                        type: 'setIdLogin',
                        payload: {
                            idLogin: resp.data.dadosResposta.strLoginIDOperador,
                        }
                    });
                    operadorDespatch({
                        type: 'setValidacoes',
                        payload: {
                            validacoes: resp.data.dadosResposta.lstValidacoes
                        }
                    });
                    
                    setIsLoading(false);
                    navigation.navigate("SelectValidation")

                } else {
                    setIsLoading(false);
                    showErros("Usuário ou Senha, invalidos!")
                }
                 
                
                
            } else {
                setIsLoading(false);
                    showErros("Preencha Login e Senha!")
                }
        } catch(e) {
            setIsLoading(false);
            showErros(e)
        }

    }


    sectionTime = () => {
        setIsLoading(false);
        setTime(setTimeout( () => {
            navigation.reset({
                routes:[{name:'Login'}]
            });
        }, 10000))

    }

    function renderButton() {
        if (isLoading) return <ActivityIndicator />;

        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()  => tryLogin()}>
                <View style={styles.button}>
                    <Text style={styles.font}>Login</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (

        <View style={styles.background}>
        <View style={styles.formContainer}>
            <FormRow>
                    <AuthInput icon='at' placeholder="user@mail.com" styles={styles.input}  value={loginId} onChangeText={value => setLoginId(value)} />
            </FormRow>
            <FormRow>
                <AuthInput icon='lock' placeholder="*********" secureTextEntry styles={styles.input} value={senha} onChangeText={value => setSenha(value)} />
            </FormRow>

            { renderButton()}

        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b4b3b7'
    },
    title: {
        fontSize: 70,
        marginBottom: 10,
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 20,
        width: '90%',
        alignItems: 'center'
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#f00',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#2196F3",
        padding: 20,
        width: 250,
        marginTop: 10,
        elevation: 2,
        borderRadius: 40,
    },
    font: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        shadowColor: '#000',
    }
})