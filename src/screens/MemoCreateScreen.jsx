import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import firebase from 'firebase';
import CircleButoon from '../components/CircleButoon';

const MemoCreateScreen = (props) => {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');
  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref
      .add({
        bodyText,
        updatedAt: new Date(),
      })
      .then((docRef) => {
        console.log('created', docRef.id);
      })
      .catch((err) => {
        console.log('Error!', err);
      });
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </View>
      <CircleButoon name="check" onPress={handlePress} />
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
