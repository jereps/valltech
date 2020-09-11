import React, { useState, useContext, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import api from '../services/api'
import { UserContext } from '../contexts/UserContext'
import {showErros} from '../common'
import Card from '../components/Card'

export default function Validacao({navigation}) {

  const { state:OperadorState, dispatch: operadorDespatch } = useContext(UserContext);
  const  [idLogin, setidLogin]  = useState(OperadorState);
  const [val, setVal] = useState([]);
  const [time, setTime] = useState(null)


  
  useEffect(() => {
    // sectionTime();
    validacoes();
    return () => clearTimeout(time);
    
  },[])



    async function validacoes() {

      try{

          const resp = await api.simula(idLogin.idLogin, idLogin.ticket);

          if(resp.status == 200 && resp.data.Status != "FALHA"){
            setVal(resp.data.dadosResposta)
          }else{
            showErros("Falha No servidor, Tente Novamente!")
          }
          
          sectionTime();

      }catch(e) {
        showErros(e)
      }
      
    }

    sectionTime = () => {
      // setIsLoading(false);
      setTime(setTimeout( () => {
        navigation.goBack();
      }, 10000))
    }

    return (

      
      <View style={styles.container}>

        <Text style={styles.titulo}>Informações da Validação</Text>

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {val.map(item => <Card data={item} />)}

        </ScrollView>

      </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center",
      backgroundColor: '#c1bec4'
    },
    titulo: {
      fontSize: 30,
      marginBottom:30,
      marginTop: -20,
    },
    list: {
      paddingHorizontal: 20,
    },
    scroll: {
      flex: 1,
      // width: '90%',
    },
  });
