import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import colors from '../../theme/colors'

interface Styles {
  input: object
};

const styles: Styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.black,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 0.3
  }
});

export default function Input(props: any) {
  const {value, onChange, ...rest} = props
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      {...rest}
    />
  );
};
