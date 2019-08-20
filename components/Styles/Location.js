import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  },
  centerView:{
    height: 300,
    width: 300,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;