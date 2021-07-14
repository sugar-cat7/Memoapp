import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButoon from '../components/CircleButoon';

const MemoEditScreen = () => (
  <KeyboardAvoidingView style={styles.container} behavior="height">
    <AppBar />
    <View style={styles.inputContainer}>
      <TextInput value="買い物リスト" multiline style={styles.input} />
    </View>
    <CircleButoon
      name="check"
      onPress={() => {
        Alert.alert('test');
      }}
    />
  </KeyboardAvoidingView>
);

export default MemoEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 32,
  },
});
