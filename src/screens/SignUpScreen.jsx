import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

const SignUpScreen = () => (
  <View style={styles.container}>
    <AppBar />
    <View style={styles.inner}>
      <Text style={styles.title}>SignUp</Text>
      <TextInput style={styles.input} value="email" />
      <TextInput style={styles.input} value="password" />
      <Button label="Submit" onPress={() => {}} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already registered?</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Login In.</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});
