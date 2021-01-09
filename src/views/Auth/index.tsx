import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

interface Styles {
  screen: object
}

const styles: Styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default function Auth() {
  return (
    <View style={styles.screen}>
      <Text>Auth</Text>
    </View>
  )
}
