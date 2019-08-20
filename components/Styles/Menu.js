import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    justifyContent: 'space-between',
    maxHeight: 200
  },
  title: {
    margin: 20,
    fontSize: 26,
    textAlign: 'center'
  },
  button: {
    paddingTop : 200,
  }
});

export default styles;