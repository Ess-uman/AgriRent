import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 60,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius:15,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default styles;