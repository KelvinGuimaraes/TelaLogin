import { registerRootComponent } from 'expo';

import App from './App';
import { StyleSheet } from 'react-native';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  email: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  senha: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },

  login: {
    width: '80%',
    borderRadius: 1,
    backgroundColor: '#454B60',
    marginBottom: 10,
  },

  subConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
  },
});
