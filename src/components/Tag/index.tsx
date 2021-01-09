import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import colors from '../../theme/colors'

interface Props {
  children: string,
  customStyle: object
}

const styles: any = StyleSheet.create({
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagLabel: {
    fontSize: 12,
    color: 'white'
  }
})

export default function Tag(props: Props) {
  const {children, customStyle} = props;
  return (
    <View style={[styles.tag, customStyle]}>
      <Text style={styles.tagLabel}>{children}</Text>
    </View>
  )
}
