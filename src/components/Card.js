import React from 'react';
import { View,Text, StyleSheet } from 'react-native'

export default ({data}) => {

    return (
        <View style={styles.card} key={data.lngIDValidacao}>
            
            <View style={styles.linerow}><Text style={styles.header}>Validação: </Text><Text style={styles.descricao}>{data.lngIDValidacao}</Text></View>

            <View style={styles.linerow}><Text style={styles.header}>Ticket: </Text><Text style={styles.descricao}>{data.strCodigoTicket}</Text></View>

            <View style={styles.linerow}><Text style={styles.header}>Liberado até: </Text><Text style={styles.descricao}>{data.datDataSaidaAposPagamento}</Text></View>

        </View>
    )
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
    card: { 
      width: '100%', 
      justifyContent: "center",
      alignContent: "center",
      padding: 10,
      marginBottom: 10, 
      backgroundColor: '#dad7dd',
      shadowColor: "#000",
      shadowOffset: {width:6,height:-7},
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 3,
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      marginRight: 10,
    },
    descricao: {
      fontSize: 16,
    },
    linerow: {
      padding: 3,
      marginBottom: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "space-between",
    },
    
  });