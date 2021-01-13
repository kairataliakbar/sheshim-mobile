import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

interface Props {
  label: string | number,
  iconColor: string,
  iconName: string
}

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statsText: {
    fontSize: 18,
    marginRight: 10
  },
});

export default function CardState(props: Props) {
  const {label, iconColor, iconName} = props;
  return (
    <View style={styles.stats}>
      <Text style={styles.statsText}>{label}</Text>
      <Ionicons name={iconName} size={24} color={iconColor} />
    </View>
  )
}
