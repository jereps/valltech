import React, {useState, useContext, useEffect} from 'react'
import {View, Picker, Text, StyleSheet, Button } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import ButtonCan from '../components/ButtonCan'
import api from  '../services/api'
import {showErros} from '../common'


export default function  Validation({navigation}){

    const { state:OperadorState, dispatch: operadorDespatch } = useContext(UserContext);


    useEffect(() => {
      novoTicket();
    });


    function chancheIdValidacao(valor){
      operadorDespatch({
        type: 'setIdValidacao',
        payload: {
          IdValidacao: valor
        }
      
      });
    }


    async function novoTicket() {
        
      try{

          const resp = await api.geraTicket()

            if(resp.status == 200 && resp.data.Status != "FALHA"){
              operadorDespatch({
                type: 'setTicket',
                payload: {
                    ticket: resp.data.dadosResposta
                  }
              });
              
            }
            

      } 
      catch(e) {
        showErros(e);
      }

    }

    return (
          <View style={styles.container}>


            <Text style={styles.font}>Selecione a Validação</Text>

            <Picker
              style={styles.picker}
              mode={'dropdown'}
              selectedValue={OperadorState.IdValidacao}
              onValueChange={(itemValue, itemIndex) => chancheIdValidacao(itemValue)} >

              { OperadorState.validacoes.map(item => <Picker.Item key={item.lngIdentificador} label={item.strNome} value={item.lngIdentificador} /> )}

            </Picker>

            

            <Button style={styles.consulta} title="Fazer Consulta" onPress={() => navigation.navigate("Validacoes")} />
          
          <View style={styles.botton}>

            <ButtonCan icon='camera-retro' onPress={() => navigation.navigate("Can")} />

          </View>


          </View>

         
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "space-around",
      backgroundColor: '#c1bec4',
      width: '100%',
    },
    dropdown: {
       height: 50,
        width: '90%',
         backgroundColor: "#fffafa"
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
    picker: { 
      height: 50,
      width: '90%',
      backgroundColor: "#aeabb1",
      marginTop: 100,
      marginBottom: 100,
    },
    botton: {
      flex:1,
      width: '100%',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      // backgroundColor: '#000'
    },
    consulta: {
      width: '90%',
      color: '#969499',
      marginTop: 10,

    },
    font: {
      color: '#e96b00',
      fontSize: 30,
      fontWeight: 'bold', 
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  // '#477373'