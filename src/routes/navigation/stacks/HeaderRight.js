import React from 'react'
import { StyleSheet } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
  },
})

const HeaderRight = ({ navigation }) => (
  <FontIcon.Button
    name="bars"
    color="white"
    backgroundColor="transparent"
    onPress={() => {
      navigation.openDrawer()
    }}
    style={styles.button}
  />
)

export default HeaderRight
