import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Player } from '@react-native-community/audio-toolkit';

const Mindfulness = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const player = new Player('../assets/Y2meta.app - Meditación Guiada 10 MINUTOS Atención Plena (128 kbps).mp3');

  const handlePress = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <ImageBackground
      source={require('../assets/PhotoReal_A_serene_zen_garden_with_lush_greenery_and_trickling_3.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={styles.playButton} onPress={handlePress}>
          <Text style={{ fontSize: 20, color: 'white' }}>
            {isPlaying ? 'Pausar' : 'Reproducir'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = {
  playButton: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  }
};
export default Mindfulness;
