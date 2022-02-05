import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'

import colors from '../../../theme/colors'

interface Props {
  children: JSX.Element | JSX.Element[],
  customStyle?: object,
  onPressCard: VoidFunction,
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 10,
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
  }
})

export default function(props: Props) {
  const {children, customStyle, onPressCard} = props;

  return (
    <TouchableOpacity
      style={[styles.card, customStyle]}
      onPress={onPressCard}
    >
      {children}
    </TouchableOpacity>
  )
}
