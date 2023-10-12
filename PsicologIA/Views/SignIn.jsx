import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { db } from '../firebaseConfig';
WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const navigation = useNavigation();

  

  const sendUserInfoToBackend = async (userInfo) => {
    try {
      // Obtén la autenticación actual de Firebase
      const firebaseAuth = auth();
  
      // Verifica si el usuario ya está autenticado
      if (firebaseAuth.currentUser) {
        // El usuario ya está autenticado, verifica si el usuario ya existe en Firestore
        const userDocumentSnapshot = await firestore()
          .collection('users')
          .doc(firebaseAuth.currentUser.uid)
          .get();
  
        if (userDocumentSnapshot.exists) {
          // El usuario ya existe en Firestore, no es necesario hacer nada más
          navigation.navigate('Menu');
        } else {
          // El usuario no existe en Firestore, crea un nuevo documento
          await firestore()
            .collection('users')
            .doc(firebaseAuth.currentUser.uid)
            .set(userInfo.toJSON());
  
          navigation.navigate('Menu');
        }
      } else {
        // El usuario no está autenticado, maneja este caso como desees
        Alert.alert('Error', 'El usuario no está autenticado.');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un error al comunicarse con el servidor.');
    }
  };
  return (
    <View style={styles.container}>
      <Button 
        title="Iniciar sesión con Google" 
     
      />
       <Button 
    title="In con Google" 
    onPress={() => navigation.navigate('Menu')}
/>

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
