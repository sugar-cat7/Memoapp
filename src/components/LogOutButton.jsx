import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

const LogOutButton = () => {
  const { navigation } = useNavigation();

  const handlePress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
            },
          ],
        });
      })
      .catch(() => {
        Alert.alert('Logout fail');
      });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
};

export default LogOutButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
});
