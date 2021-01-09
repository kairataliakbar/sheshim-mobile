import React, { ReactChildren } from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../../theme/colors';

interface Styles {
  card: object
};

interface ComponentProps {
  children: ReactChildren,
  customStyle?: object,
  onPressCard: Function,
};

const styles: Styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 20,
    borderTopWidth: 2,
    borderTopColor: colors.orange,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: 'white'
  },
});

export default function(props: ComponentProps) {
  const {children, customStyle, onPressCard} = props;

  return (
    <TouchableOpacity
      style={[styles.card, customStyle]}
      onPress={onPressCard}
    >
      {children}
    </TouchableOpacity>
  );
};
