import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function SignIn() {
  const navigation = useNavigation();



  const sendUserInfoToBackend = async (userInfo) => {
    try {
      const response = await fetch('URL_DE_TU_BACKEND/Logingoogle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userInfo.displayName,
          lastname: userInfo.familyName, // Asegúrate de que estos campos existen en userInfo
          email: userInfo.email,
        }),
      });

      const data = await response.json();

      if (data.jwt) {
        await AsyncStorage.setItem("@user", JSON.stringify(userInfo));
        navigation.navigate('Menu');
      } else {
        Alert.alert('Error', 'Hubo un problema al registrar al usuario en el sistema.');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un error al comunicarse con el servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicio de Sesión</Text>
      <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
        <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
});
