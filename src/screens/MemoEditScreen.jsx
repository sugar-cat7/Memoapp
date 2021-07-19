import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';
import CircleButoon from '../components/CircleButoon';

const MemoEditScreen = (props) => {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);
  const handlePress = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref
        .set(
          {
            bodyText: body,
            updatedAt: new Date(),
          },
          { merge: true }
        )
        .then(() => {
          navigation.goBack();
        })
        .catch((err) => {
          Alert.alert(err.code);
        });
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBody(text);
          }}
        />
      </View>
      <CircleButoon name="check" onPress={handlePress} />
    </KeyboardAvoidingView>
  );
};

export default MemoEditScreen;

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
