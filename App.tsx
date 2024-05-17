import React from 'react';
import { View } from 'react-native';
import Welcome from './App/Welcome';
import styles from './App/style';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
};

export default App;
