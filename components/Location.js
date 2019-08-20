import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Button,
  AppState,
  Text
} from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import styles from './Styles/Location';
import { getLocationStatus, getLocationAsync } from '../services/Location.service';

import UsersMap from './UsersMap';

const ShowLocation = () => {

  const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);
  const [location, setLocation] = useState(null);
  const [setting, setSetting] = useState(false);
  
  const handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === 'active'
    ) {
      setIsLocation();
    }
    setAppState(nextAppState);
  };
  AppState.addEventListener('change', handleAppStateChange);

  const changeSettings = () => {
    setSetting(true);
    openSetting();
  }

  const openSetting = () => {
    setIsLocationModalVisible(false);
    setSetting(false);
    IntentLauncher.startActivityAsync(
      IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS
    );
  };

  const setIsLocation = async() => {
    const isEnabled = await getLocationStatus();
    if(isEnabled){
      setIsLocationModalVisible(false);
      const location = await getLocationAsync();
      setLocation(location);
    }else{
      setIsLocationModalVisible(true);
    }
  }

  useEffect(() => {
    setIsLocation();
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    }
  },[appState, setting, isLocationModalVisible]);

  return (
    <View style={styles.container}>
      <Modal
      onModalHide={setting ? openSetting() : undefined}
      isVisible={isLocationModalVisible}
      >
        <View style={styles.centerView}>
          <Button
            onPress={() => changeSettings()}
            title="Enable Location Services"
          />
        </View>
      </Modal>
      <Text style={styles.paragraph}>{location ? JSON.stringify(location) : 'Waiting'}</Text>
      <UsersMap userLocation={location ? location : null} />
    </View>
  );  
};
export default ShowLocation;