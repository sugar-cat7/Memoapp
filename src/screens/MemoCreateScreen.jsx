import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import CircleButoon from '../components/CircleButoon';

const MemoCreateScreen = (props) => {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButoon
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default MemoCreateScreen;

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
