import React from 'react';
import { View } from 'react-native';
import NextButton from './App/Welcome';
import styles from './App/style';

const App = () => {
  return (
    <View style={styles.container}>
      <NextButton />
    </View>
  );
};

export default App;
