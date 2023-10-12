import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { Player } from '@react-native-community/audio-toolkit';

const Lluvia = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const player = new Player('ruta_a_tu_archivo.mp3');

  const handlePress = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={{ flex: 1 }}>
      <Video
        source={require('../assets/lluviaa.mp4')} // Reemplaza por la ruta de tu video
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
        resizeMode="cover" // o "contain" si prefieres
        repeat={true} // Reproducir en bucle
        playInBackground={true} // Continuar reproduciendo incluso cuando se cambia a otra app o pantalla
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.playButton} onPress={handlePress}>
          <Text style={{ fontSize: 20, color: 'white' }}>
            {isPlaying ? 'Pausar' : 'Reproducir'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  playButton: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  }
};

export default Lluvia;
