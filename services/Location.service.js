import * as Location from 'expo-location';

export const getLocationAsync = async () => {
  const location = await Location.getCurrentPositionAsync({});
  return {
    ...location.coords, 
    latitudeDelta:0.0622,
    longitudeDelta: 0.0421
  };
};

export const getLocationStatus = async() => {
  const statusProvider = await Location.getProviderStatusAsync({});
  return statusProvider.locationServicesEnabled;
}
