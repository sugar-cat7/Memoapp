import { string, func } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};
Button.defaultProps = {
  onPress: null,
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
