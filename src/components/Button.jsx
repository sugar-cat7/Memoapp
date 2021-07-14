import { string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = (props) => {
  const { label } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
};

Button.propTypes = {
  label: string.isRequired,
};
export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    paddingHorizontal: 32,
    paddingVertical: 8,
    lineHeight: 32,
    color: '#ffffff',
  },
});
