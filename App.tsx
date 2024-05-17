import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import SplashScreen from './App/SplashScreen';
import LoginScreen from './App/login';
import styles from './App/style';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen/>
    </View>
  );
};

export default App;
