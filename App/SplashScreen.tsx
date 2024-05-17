import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/welcomelogo.jpg')} />
      <TouchableOpacity style={styles.buttonCont} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonCont: {
    backgroundColor: '#5AE4A8',
    borderRadius: 15,
    padding: 20,
    marginTop: 300,
    height: 70,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: -130,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
});

export default SplashScreen;
