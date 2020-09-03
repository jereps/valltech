import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Permissions } from 'react-native-unimodules'
import { BarCodeScanner } from 'expo-barcode-scanner'
import BarcodeMask from 'react-native-barcode-mask'

export default function Can({navigation}) {
  const [hasCameraPermission, setCameraPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    permissao()
  }, [])

    const permissao = () => {
      Alert.alert(
        "Permissão de Câmera",
        "O App precisa de acesso à câmera.",
        [
          {
            text: "Cancel",
            onPress: () => setCameraPermission(false),
            style: "Cancel"
          },
          { text: "OK", onPress: () => getPermissionsAsync() }
        ],
        { cancelable: false } 
      );
    }

    const getPermissionsAsync = async () => {
      const {status} = (await Permissions.askAsync(Permissions.CAMERA))
      const isPermissionGranted = status === 'granted'
      setCameraPermission(isPermissionGranted)
    }

    const handleBarCodeScanned = ({type, data}) => {
      setScanned(true)
      alert(`Bar code with type ${type} and data ${data} has been scanned!`)
      navigation.goBack()
    }

      

  if (hasCameraPermission === null) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Solicitando permissão de câmera</Text>
      </View>
    )
  }
  if (hasCameraPermission === false) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Sem acesso a Câmera</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <BarcodeMask
        width={"80%"} height={"50%"} edgeColor={'#62B1F6'} animatedLineColor={'#e96b00'} animatedLineWidt={"50%"} showAnimatedLine={true} outerMaskOpacity={0.8}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
})