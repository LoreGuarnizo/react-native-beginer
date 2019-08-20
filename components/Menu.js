import React from 'react';
import { View, Button, Text } from "react-native";
import styles from './Styles/Menu';

export const Menu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workshop Test</Text>
      <Button style={styles.button}
        title="Show Map"
        onPress={() => navigation.navigate('Map')}
      />
      <Button style={styles.button}
        title="Show Charts"
        onPress={() => navigation.navigate('Charts')}
      />
    </View>
  );
}

export default Menu;