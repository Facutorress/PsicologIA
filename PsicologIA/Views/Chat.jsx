import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../assets/PhotoReal_Vertical_photograph_of_a_warm_and_welcoming_atmosphe_0.jpg';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');

      // Conectar con la API de OpenAI para obtener una respuesta
      try {
        const response = await fetch('https://api.openai.com/v1/completions', {  // Reemplaza 'URL_DE_TU_BACKEND' con la URL de tu servidor que maneja la llamada a OpenAI
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: message,
          }),
        });

        const data = await response.json();

        if (data && data.response) {
          setMessages(prevMessages => [...prevMessages, { text: data.response, sender: 'ia' }]);
        }
      } catch (error) {
        console.error("Error al obtener respuesta:", error);
      }
    }
  };
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Text style={styles.header}>.</Text>

      <View style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.sender === 'user' ? styles.userMessage : styles.iaMessage}>
            <Text>{msg.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Escribe un mensaje..."
        />
        <Button title="Enviar" onPress={handleSendMessage} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  iaMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10,
  },
});


