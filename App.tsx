
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Text>Open</Text> */}
     <Text style={styles.textStyles}> Titi</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles:{
    color:'black',
    fontSize:35,
    fontWeight:'bold',
  }
});
