import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backgroundImage from '../assets/PhotoReal_A_dimly_lit_office_with_a_sleek_modern_design_that_e_0.jpg';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Text style={styles.header}>Menu Screen</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.buttonText}>Conversacion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { /* Navegación u otra acción para Opción 2 */ }}>
        <Text style={styles.buttonText}>Opción 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { /* Navegación u otra acción para Opción 3 */ }}>
        <Text style={styles.buttonText}>Opción 3</Text>
      </TouchableOpacity>
    </ImageBackground>
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
